import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {auth} from "../firebase.js";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword
,onAuthStateChanged,signOut} from 'firebase/auth'

export const StoreContext = createContext(null);

function StoreContextProvider(props) {

  const [currentUser, setCurrentUser] = useState(null);
  const [employee_list, setEmployeeList] = useState([]);

  useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth, (user)=>{

  setCurrentUser(user)
})
    return ()=>unsubscribe();
  } ,[])


  const registerUser = async ({email,password}) => {
   try {
   await createUserWithEmailAndPassword(auth,email,password);

     return true;
   }catch (error){
     console.error('error registering user:',error);
     return false;
   }
  };

  const loginUser =async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth,email,password);
      return true;
    }catch (error){
      console.error('error logging in ',error);
      return false;
    }
  };

  const logoutUser = async () => {
    try {
      await signOut(auth);
      setCurrentUser(null);

    }
    catch (error){
      console.error('error logging out: ',error);
    }
  };

  useEffect(() => {
    const fetchEmployeeList = async () => {
      try {
        const response = await fetch('https://66c450e2b026f3cc6ceed002.mockapi.io/api/v1/Employee_list');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setEmployeeList(data);
        } else {
          console.error('Fetched data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching employee list:', error);
      }
    };

    fetchEmployeeList();
  }, []);

  const contextValue = {

    currentUser,
    registerUser,
    loginUser,
    logoutUser,
    employee_list,
    setEmployeeList,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;

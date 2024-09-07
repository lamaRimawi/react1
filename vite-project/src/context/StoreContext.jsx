import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { employee_list as initialEmployeeList } from "../assets/assets.js";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [employee_list, setEmployeeList] = useState(initialEmployeeList);

  const registerUser = (user) => {
    const userExists = registeredUsers.some((u) => u.email === user.email);
    if (userExists) {
      return false;
    }
    setRegisteredUsers((prevUsers) => [...prevUsers, user]);
    return true;
  };

  const loginUser = (email, password) => {
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };


  const contextValue = {
    registeredUsers,
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

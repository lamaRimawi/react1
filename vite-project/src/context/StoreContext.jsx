import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const registerUser = (user) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, user]);
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

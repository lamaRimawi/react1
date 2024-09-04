import React, {createContext, useEffect, useState} from 'react'
import {food_list} from "../assets/assets.js";
import PropTypes from "prop-types";


export const StoreContext=createContext(null)
function StoreContextProvider(props) {
  const [cartItems, setCartItems] = useState({});
  const addCartItem = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prevState) => ({...prevState,[itemId]:1}));
    }else
    {
      setCartItems((prevState)=> ({...prevState,[itemId]:prevState[itemId]+1}));
    }

  }
  const removeCartItem = (itemId) => {
      setCartItems((prevState)=> ({...prevState,[itemId]:prevState[itemId]-1}));

  }
  const  getTotalCartAmount = ()=>{
      let amount=0;
      for( const item in cartItems){
          if(cartItems[item] >0){
              let itemInfo=food_list.find((p)=> p._id === item);
              amount += itemInfo.price* cartItems[item];
          }
      }
      return amount;
  }
 useEffect(()=>{

        console.log(cartItems)

     },[cartItems]
 )

  const contextValue={
    food_list,
    cartItems,
    addCartItem,
    removeCartItem,
    setCartItems,
      getTotalCartAmount
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {
        props.children
      }
    </StoreContext.Provider>
  )
}

export default StoreContextProvider

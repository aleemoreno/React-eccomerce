import { createContext, useContext, useState } from 'react';


export const cartContext = createContext ({})

export const useCart = () => {
    return useContext(cartContext); 
  };
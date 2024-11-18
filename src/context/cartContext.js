import { createContext, useContext, useState } from 'react';


export const cartContext = createContext ({})

export const useCart = () => {
    return useContext(cartContext); // Devuelve el contexto para consumirlo fácilmente
  };
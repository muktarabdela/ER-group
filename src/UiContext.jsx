import React, { createContext, useState, useContext } from 'react';
const UiContext = createContext();

// Create a custom hook to use the FormContext
export const useUiContext = () => useContext(UiContext);

// FormContext Provider component
export const UiProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Context value
    const value = {
        isOpen,
        toggleMenu
    };


    return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

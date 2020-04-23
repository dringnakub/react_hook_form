import React, { useState, createContext } from 'react'

export const StoreContext = createContext({});

export const StoreContextProvider = ({ children }) => {
    const [information, setInformation] = useState({
        firstName: null,
        lastName: null,
        nickName: null
    })

    const [account, setAccount] = useState({
        email: null,
        password: null,
        confirmPassword: null
    })

    const store = {
        information: [information, setInformation],
        account: [account, setAccount]
    }

    console.log("store ", store)
    return <StoreContext.Provider value={store} >{children}</StoreContext.Provider>
}
import {React, useState,  createContext, useContext} from 'react';


const mmenuctx = createContext();


export const MmenuctxProvider = ({children}) => {

const [showmmenu, setShowmmenu] = useState(false);

    return (

        <mmenuctx.Provider value={{showmmenu, setShowmmenu}}>
            {children}
        </mmenuctx.Provider>
    )
}

export const useMmenuctx = () =>  useContext(mmenuctx);
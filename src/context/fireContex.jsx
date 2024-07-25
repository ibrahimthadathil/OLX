import { createContext, useState } from "react";

export const fireContext = createContext()

export const Authcontext = createContext() 

export default function Context({children}){
    const [user,setUser] = useState(null)
    
    return (
        <Authcontext.Provider value={{user,setUser}}>
            {children}
        </Authcontext.Provider>
    )
}


 
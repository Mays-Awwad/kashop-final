import { createContext } from "react";




export const UserContext=createContext();


const UserContextProvider=({children})=>{
    console.log('Hi, Im a context provider');
    const userName='Mays'; 
    const userAge='20';

    return <UserContext.Provider value={{userName,userAge} }>
        {children}
    </UserContext.Provider>


}

export default UserContextProvider;
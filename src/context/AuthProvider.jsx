import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/Localstorage'

export const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState([])

    
    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage();
        setUserData(employees) 
    },[])
   

  return (
    <div>
        <AuthContext.Provider value={[userData, setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
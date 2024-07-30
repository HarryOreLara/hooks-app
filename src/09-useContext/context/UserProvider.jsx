import React, { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     id:123,
//     name:'Harry Ore',
//     email:'harry@gmail.com'
// }

const UserProvider = ({children}) => {

  const [user, setUser] = useState();


  return (
    // <UserContext.Provider value={{hola:'mundo', user:user}}>
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider

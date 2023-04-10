import './App.css'
import React, {useState} from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import Login from './components/Login'
import {LoginContext} from "./LoginContext"

export default function App() {
  const [userLogin, setUserLogin] = useState(false)

  return (
    <BrowserRouter>
      <div className='app'>
        <LoginContext.Provider value={{setUserLogin}}>
        {
          !userLogin?(
            <Login/>
          ) : (
            <div className="appBody">
              <SideBar/>
                <Routes>
                <Route path="/" element={<Chat/>}></Route>
                <Route path='/group/:groupId' element={<Chat/>}></Route>
                </Routes>
            </div>
          )
        }
        </LoginContext.Provider>
        </div>
    </BrowserRouter>
    
  )
}



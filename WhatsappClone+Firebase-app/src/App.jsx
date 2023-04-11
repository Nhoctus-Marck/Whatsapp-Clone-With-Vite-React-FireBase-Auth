import './App.css'
import React, {useState} from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import Login from './components/Login'
import {LoginContext} from "./LoginContext"
import Register from './components/Register'

export default function App() {
  const [userLogin, setUserLogin] = useState(false)
  const [userName, setUserName] = useState("")
  return (
    <BrowserRouter>
      <div className='app'>
        <LoginContext.Provider value={{setUserLogin,setUserName}}>
        {
          !userLogin?(
            <Routes>
              <Route path="/" element={<Register />}></Route>
               <Route path="/register" element={<Register />}></Route>
              <Route path='/login' element={<Login/>}></Route>
            </Routes>
          ) : (
            <div className="appBody">
              <SideBar userName={userName}/>
                <Routes>
                <Route path="/" element={<Chat userName={userName}/>}></Route>
                <Route path='/group/:groupId' element={<Chat userName={userName}/>}></Route>
                </Routes>
            </div>
          )
        }
        </LoginContext.Provider>
        </div>
    </BrowserRouter>
    
  )
}



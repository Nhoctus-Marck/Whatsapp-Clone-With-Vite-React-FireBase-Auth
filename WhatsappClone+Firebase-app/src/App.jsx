import './App.css'
import React, {useState} from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import SideBar from './components/SideBar'
import Chat from './components/Chat'


export default function App() {

  return (
    <BrowserRouter>
      {/* <div className='app'></div> */}
      <div className="appBody">
        <SideBar/>
        <Routes>
         <Route path="/" element={<Chat/>}></Route>
         <Route path='/group/:groupId' element={<Chat/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  )
}



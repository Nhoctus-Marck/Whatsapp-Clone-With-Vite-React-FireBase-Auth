import React from 'react'
import { Link } from 'react-router-dom'
import './sidebarchat.css'
import { RiArrowDownSLine } from "react-icons/ri";

export default function SideBarChat() {
  return (
    <Link>
        <div className='sidebarChat'>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
            <div className='sidebarChatInfo'>
                <h2>Name</h2>
                <p>message</p>
            </div>
            <div className='lastMessageDay'>
                <p>Today</p>
                <button style={{ border: "none" }}><RiArrowDownSLine className='RiArrowDownSLine'/></button>
            </div>
        </div>
    </Link>
  )
}

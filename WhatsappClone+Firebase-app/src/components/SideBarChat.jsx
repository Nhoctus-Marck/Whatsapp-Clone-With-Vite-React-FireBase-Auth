import React from 'react'
import { Link } from 'react-router-dom'
import './sidebarchat.css'
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from 'react';

export default function SideBarChat() {

    const [ArrowButton_class,setArrowButton_class] = useState("hidden")
    const updateOptionBtn = () => {
        if(ArrowButton_class === ""){
            setArrowButton_class("hidden")
        }else{
            setArrowButton_class("")
        } 
    }
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
                <button onClick={updateOptionBtn} style={{ border: "none" }}>
                    <RiArrowDownSLine className='RiArrowDownSLine'/>
                    <div className={`filterOptions-${ArrowButton_class}`}>
                        <p>Archivar chat</p>
                        <p>Silenciar notificaciones</p>
                        <p>Eliminar chat</p>
                        <p>Finar chat</p>
                        <p>Marcar como no leído</p>
                    </div>
                </button>
            </div>
        </div>
    </Link>
  )
}

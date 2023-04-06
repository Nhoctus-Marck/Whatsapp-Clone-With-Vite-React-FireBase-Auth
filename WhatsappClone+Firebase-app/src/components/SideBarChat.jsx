import React from 'react'
import { Link } from 'react-router-dom'
import './sidebarchat.css'
import { RiArrowDownSLine } from "react-icons/ri";
import { useState , useEffect } from 'react';
import { collection, addDoc ,query,orderBy,onSnapshot} from "firebase/firestore";
import {db} from "../firebase"

export default function SideBarChat({addNewChat,name,id}) {
    const [msg,setMsg] = useState("");
    useEffect(()=>{
        if(id){
            const q = query(collection(db,"groups",id,"messages"),orderBy("timestamp","asc"))
            const getMessage = onSnapshot(q,(snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                setMsg(doc.data())
            })
        })
        }
    },[id])
    const createChat = async() =>{
        const group = prompt("please enter de group name")
        if(group){
            try {
                const docRef = await addDoc(collection(db, "groups"), {
                  name: group,
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        }
        
    }

    const [ArrowButton_class,setArrowButton_class] = useState("hidden")
    const updateOptionBtn = () => {
        if(ArrowButton_class === ""){
            setArrowButton_class("hidden")
        }else{
            setArrowButton_class("")
        } 
    }
  return !addNewChat?(
    <Link to={`group/${id}`}>
        <div className='sidebarChat'>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
            <div className='sidebarChatInfo'>
                <h2>{name}</h2>
                <p>{msg.message}</p>
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
  ) : (
    <div onClick={createChat} className='sidebarChat'>
        <h3>Add New Chat</h3>
    </div>
  )
}

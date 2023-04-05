import React from 'react'
import './sidebar.css'
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { TbHistoryToggle } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import SideBarChat from "./SideBarChat"
import { useState } from 'react';
import { HiArrowLeft } from "react-icons/hi2";




export default function SideBar({userName}) {
   
    const [search_class,setSearchClass] = useState("")
    const [Arrowleft_class,setArrowleftClass] = useState("hidden")
    const updateSearchBtn = () => {
        if(search_class === ""){
            setSearchClass("hidden")
            setArrowleftClass("")
        }else{
            setSearchClass("")
            setArrowleftClass("hidden")
        } 
    }

  return (
    <div className='sidebar'>
        <div className='sidebarHeader'>
            <div style={{display:'flex'}}>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <h1>{userName}</h1>
            </div>
            <div className="sidebarHeaderRight">
                <button style={{ border: "none" }}>
                    <span className="material-symbols-outlined">
                    <HiOutlineUserGroup className='HiOutlineUserGroup'/>
                    </span>
                </button>   
                <button style={{ border: "none" }}>
                    <span className="material-symbols-outlined"><TbHistoryToggle className='HiOutlineUserGroup'/></span>
                </button>
                <button style={{ border: "none" }}>
                    <span className="material-symbols-outlined"><BsFillChatLeftTextFill className='HiOutlineUserGroup'/></span>
                </button>
                <button style={{ border: "none" }}>
                    <span className="material-symbols-outlined"><BsThreeDotsVertical className='HiOutlineUserGroup'/></span>
                </button>
            </div>
        </div>
        <div className="sidebarSearch">
            <div className="sidebarSearchContainer">
            <span className="material-symbols-outlined">
                <AiOutlineSearch className={`AiOutlineSearch-${search_class}`}/>
                <HiArrowLeft className={`HiArrowLeft-${Arrowleft_class}`}/>
            </span>  
            <input onClick={updateSearchBtn} onPointerLeave={updateSearchBtn} type="text" placeholder="Search contact" />
            </div>
            <BiFilter className='BiFilter'/>
        </div>
        <div className="sidebarChats">
            <SideBarChat className="SideBarChat"/>
            <SideBarChat className="SideBarChat"/>
            <SideBarChat className="SideBarChat"/>
        {/* {group.map((group) => {
          return <SidebarChat key={group.id} name={group.name} id={group.id} />;
        })} */}
      </div>

    </div>
  )
}

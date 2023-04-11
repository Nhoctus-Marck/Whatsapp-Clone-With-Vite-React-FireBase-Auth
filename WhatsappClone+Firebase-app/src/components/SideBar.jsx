import React, { useEffect , useState } from 'react'
import './sidebar.css'
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { TbHistoryToggle } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import SideBarChat from "./SideBarChat"
import { HiArrowLeft } from "react-icons/hi2";
import { collection, getDocs , onSnapshot} from "firebase/firestore"
import {db} from "../firebase"

export default function SideBar({userName}) {
    const[group,setGroup]= useState([]);
    // console.log(group)

    const getGroups = async() =>{
        const getData = onSnapshot(collection(db,"groups"),(snapshot)=>{
            console.log(snapshot);
            let list = [];
            snapshot.docs.forEach((doc)=>{
                list.push({
                    id:doc.id,
                    ...doc.data()
                })
            })
            setGroup(list)
        })
    };
    const Logout= ()=>{
        localStorage.clear()
        window.location.reload()
    }
    useEffect(()=>{
        getGroups()
    },[])
   
    const [search_class,setSearchClass] = useState("")
    const [Arrowleft_class,setArrowleftClass] = useState("hidden")
    const [ArrowButton_class,setArrowButton_class] = useState("hidden")
    const updateSearchBtn = () => {
        if(search_class === ""){
            setSearchClass("hidden")
            setArrowleftClass("")
        }else{
            setSearchClass("")
            setArrowleftClass("hidden")
        } 
    }
    const updateOptionBtn = () => {
        if(ArrowButton_class === ""){
            setArrowButton_class("hidden")
        }else{
            setArrowButton_class("")
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
                <button onClick={updateOptionBtn} style={{ border: "none" }}>
                    <span className="material-symbols-outlined"><BsThreeDotsVertical className='HiOutlineUserGroup'/></span>
                    <div className={`sidebarDotsOptions-${ArrowButton_class}`}>
                        <p>Nuevo grupo</p>
                        <p>Nueva comunidad</p>
                        <p>Archivados</p>
                        <p>Mensajes destacados</p>
                        <p>Seleccionar chats</p>
                        <p>Configuración</p>
                        <p onClick={Logout}>Cerrar sesión</p>
                    </div>
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
            <SideBarChat className="SideBarChat" addNewChat/>
            {group.map((group) => {
          return <SideBarChat key={group.id} name={group.name} id={group.id} />;
        })}
      </div>
    </div>
  )
}

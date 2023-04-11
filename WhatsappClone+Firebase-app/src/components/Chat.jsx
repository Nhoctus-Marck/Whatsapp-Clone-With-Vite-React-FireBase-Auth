import React, { useEffect, useState } from "react";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdInsertEmoticon } from "react-icons/md";
import { HiMicrophone} from "react-icons/hi";
import { FiPaperclip } from "react-icons/fi";
import "./chat.css"
import { useParams } from "react-router-dom";
import { addDoc, collection,doc, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import {db} from "../firebase"
import { getAuth } from "firebase/auth";

export default function Chat({userName}) {
  const {groupId} = useParams()
  const [groupName,setGroupName]= useState()
  const[input,setInput]= useState("")
  const[messages,setMessages]= useState([])
  // console.log(groupId)
  const auth = getAuth();
  const user = auth.currentUser;

    if (user !== null) {
        // The user object has basic properties such as display name, email, etc.
        const displayName = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;
      
        // The user's ID, unique to the Firebase project. Do NOT use
        // this value to authenticate with your backend server, if
        // you have one. Use User.getToken() instead.
        const uid = user.uid;
      }

  useEffect(()=>{
    if(groupId){
      const getGroup = onSnapshot(doc(db,"groups",groupId),(doc)=>{
        // console.log(doc)
        setGroupName(doc.data().name)
      })
      const q = query(collection(db,"groups",groupId,"messages"),orderBy("timestamp","asc"))
      const getMessage = onSnapshot(q,(snapshot)=>{
        let msgList = [];
        snapshot.docs.forEach((doc)=>{
          msgList.push({...doc.data()})
        })
        setMessages(msgList)
      })
    }
  },[groupId])

  const sendMessage = async (e) =>{
    e.preventDefault()
    if(input == ""){
      return alert("please enter your message")
    }{
    try {
      const sendData = await addDoc(collection(db,"groups",groupId,"messages"),{
        message:input,
        // name:"rahul",
        name:user.displayName || userName,
        timestamp:serverTimestamp()
      })
      
    } catch (error) {
      console.error('error',error)
    }
  }
  }
  // function sendMesagge(e){
  //   e.preventDefault()
  //   alert(input)
  //   setInput("")
  // }
  // const handdleOnChange = (e) => {
  //   setInput(e.target.value)
  //   console.log(input)
  // }

const [ArrowButton_class,setArrowButton_class] = useState("hidden")
    const updateOptionBtn = () => {
        if(ArrowButton_class === ""){
            setArrowButton_class("hidden")
        }else{
            setArrowButton_class("")
        } 
    }

  return (
    <div className='chat'>
      <div className="chatHeader">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
        <div className='chatHeaderInfo'>
          <div className='chatInfo'>
            <p>{groupName}</p>
            <p>Last Seen at : {""} {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
            </p>
          </div>
          <div className='chatHeaderRight'>
            <button style={{ border: "none" }}>
              <span className="material-symbols-outlined"><AiOutlineSearch className='HiOutlineUserGroup'/></span>
            </button>
            <button onClick={updateOptionBtn} style={{ border: "none" }}>
              <span className="material-symbols-outlined"><BsThreeDotsVertical className='HiOutlineUserGroup'/></span>
              <div className={`ChatOptions-${ArrowButton_class}`}>
                        <p>Info.del contacto</p>
                        <p>Seleccionar mensaje</p>
                        <p>Cerrar chat</p>
                        <p>Silenciar notificaciones</p>
                        <p>Mensajes temporales</p>
                        <p>Vaciar mensajes</p>
                        <p>Eliminar chat</p>
                        <p>Reportar</p>
                        <p>Bloquear</p>
                    </div>
            </button>
          </div>
        </div>
      </div>
      <div className="chatBody">
        {messages.map((message)=>(
          <div>
            <p className='chatTime' style={{display:"none"}}>
              <span className='' >Today</span>
            </p>
            <p className={`chatMessage ${message.name == (userName || user.displayName) && "chatReceiver"}`}>
              <span className='chatName'>{message.name}</span>
              <span>{message.message}</span>
              <span className='timestamp'>{new Date(message.timestamp?.toDate()).toUTCString()}</span>
            </p>
          </div>
        ))}
          {/* <p className='chatReceiver'>
            <span>message</span>
            <span className='timestamp'>time</span>
          </p> */}
      </div>
      <div className="chatFooter">
        <div className='addEmoticAndDocument'>
        <MdInsertEmoticon className='MdInsertEmoticon'/>
        <FiPaperclip className='MdInsertEmoticon'/>
        </div>
        <form action="" onSubmit={(e) => {sendMessage(e)}}>
          <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}} placeholder="Type a message"/>
          <button type="submit" style={{ border: "none" }}>
            <span className="material-symbols-outlined" type="submit" ></span>
          </button>
          <button style={{ border: "none" }}>
            <span className="material-symbols-outlined"><HiMicrophone className='HiMicrophone'/></span>
          </button>
        </form>
      </div>
    </div>
  )
}

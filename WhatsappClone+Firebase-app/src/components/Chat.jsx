import React, { useEffect, useState } from "react";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { MdInsertEmoticon } from "react-icons/md";
import { HiMicrophone} from "react-icons/hi";
import { FiPaperclip } from "react-icons/fi";
import "./chat.css"

export default function Chat() {

  const[input,setInput] = useState("")

  function sendMesagge(e){
    e.preventDefault()
    alert(input)
    setInput("")
}
const handdleOnChange = (e) => {
    setInput(e.target.value)
    console.log(input)
}

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
            <p>name</p>
            <p>Last Seen at :</p>
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
        <p className='chatTime'>
            <span className=''>Today</span>
          </p>
          <p className='chatMessage'>
            <span>message</span>
            <span className='timestamp'>time</span>
          </p>
          <p className='chatReceiver'>
            <span>message</span>
            <span className='timestamp'>time</span>
        </p>
      </div>
      <div className="chatFooter">
        <div className='addEmoticAndDocument'>
        <MdInsertEmoticon className='MdInsertEmoticon'/>
        <FiPaperclip className='MdInsertEmoticon'/>
        </div>
        <form action="">
          <input type="text" value={input} onChange={handdleOnChange} placeholder="Type a message"/>
          <button type="submit" style={{ border: "none" }}>
            <span className="material-symbols-outlined" type="submit" onClick={sendMesagge}></span>
          </button>
          <button style={{ border: "none" }}>
            <span className="material-symbols-outlined"><HiMicrophone className='HiMicrophone'/></span>
          </button>
        </form>
      </div>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'
import {sendMessage, isTyping} from 'react-chat-engine'
import { SendOutlined, PictureOutlined } from '@ant-design/icons'
import '../App.css'

const MessageForm = (props) => {

const [value, setvalue] = useState('')
const {chatId, creds} = props;

const handleSubmit= (event) => {
event.preventDefault();

const text = value.trim();

if(text.length>0) sendMessage(creds, chatId, {text});
setvalue('')
}

const handleChange= (event) => {
setvalue(event.target.value)
isTyping(props, chatId)
}

const handleUpload = (event) =>{
    sendMessage(creds, chatId, {files : event.target.files, text:''})
}

const div = document.createElement('div');
div.className = 'divsignout';
const buttonsignout = document.createElement('button'); 
buttonsignout.className= 'logoutbuttin'
buttonsignout.innerText = 'Log Out'
div.append(buttonsignout)
div.addEventListener('click', function(){
    localStorage.setItem('chatengineusername', "");
    localStorage.setItem('chatenginepassword', "");
    window.location.reload();
})

document.addEventListener('load', function() {
    document.querySelector(".chat-title-container").append(div)
    alert("It's loaded!")
 });

  return (
    <>
    {
        

    }
    <form onSubmit={handleSubmit}
    className='message-form'
    >
        
        <input type="text"
        className='message-input'
        placeholder='Send a message...'
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        />

        <label htmlFor="upload-button">
            <span className='image-button'>
                <PictureOutlined className='picture-icon'/>
            </span>
        </label>

        <input type="file" 
        multiple={false}
        id='upload-button'
        style={{display:'none'}}
        onChange={handleUpload}
        />
        <button type='submit' className='send-button'>
            <SendOutlined className='send-icon'/>
        </button>
    </form>
    <div className='madewithlove' >
        <p >Made With <span>❤</span> By <span><a href="https://www.linkedin.com/in/digitaldk/" 
        target={'_blank'} rel="noreferrer" >Dheeraj Bhandadri</a></span></p>
    </div>
    </>
  )
}

export default MessageForm
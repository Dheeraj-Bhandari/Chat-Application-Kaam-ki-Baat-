import React from 'react'
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed'
import './App.css'
import LoginForm from './components/LoginForm';


export const App = () => {
    if(!localStorage.getItem('chatengineusername')) return <LoginForm/>
  return (
    <ChatEngine
    height="100vh"
    projectID="17c557b0-9a68-4944-9b29-7b6cc4b5ac2f"
    userName={localStorage.getItem('chatengineusername')}
    userSecret={localStorage.getItem('chatenginepassword')}
    renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App;
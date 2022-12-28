import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import "./App.css";
import LoginForm from "./components/LoginForm";

export const App = () => {
  if (!localStorage.getItem("chatengineusername")) return <LoginForm />;
  return (
    <ChatEngine
      height="100vh"
      projectID="9a3e9b95-fb35-45b9-9053-5ab8956772b8"
      userName={localStorage.getItem("chatengineusername")}
      userSecret={localStorage.getItem("chatenginepassword")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;

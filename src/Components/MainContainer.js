import React,{useState} from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import WorkArea from "./WorkArea";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import Login from "./Login";
import Users from "./Users";
import { Outlet } from "react-router-dom";
function MainContainer(){
    const [conversations,setConversations]= useState([
        {
            name:"Test#1",
            lastMessage: "Last Message #1",
            timeStamp: "today",
        },
        {
            name:"Test#2",
            lastMessage: "Last Message #2",
            timeStamp: "today",
        },
        {
            name:"Test#3",
            lastMessage: "Last Message #3",
            timeStamp: "today",
        },
    
    ]);
    return <div className="main-container">
   <Sidebar /> 
   <Outlet/>
   {/* <Welcome/> */}
   {/* <CreateGroups/> */}
     {/* <ChatArea props={conversations[0]} /> */}
    <Users/>
    {/* <Groups/> */}
    
    </div>;
}

export default MainContainer;
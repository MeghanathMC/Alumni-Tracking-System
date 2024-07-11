import React, { useState } from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from "@mui/material";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from "@mui/icons-material/LightMode";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from './ConversationsItem';
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
import Conversations from "./Conversations";

function Sidebar(){
   const dispatch= useDispatch();
    const lightTheme=useSelector((state)=> state.themeKey);
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
const navigate = useNavigate();
   return <div className="sidebar-container">
    <div className={"sb-header" + (lightTheme ? "" :"dark")}>
        <div>
        <IconButton>
        <AccountCircleIcon className={ "icon"+(lightTheme ? "":"dark")}/>
        </IconButton>
        </div>

        <div>
        <IconButton onClick={()=>{
            navigate('users')}}>
        <PersonAddIcon/>
        </IconButton>

        <IconButton onClick={()=>{
            navigate('groups')}}>
        <GroupAddIcon/>
        </IconButton>

        <IconButton onClick={()=>{
            navigate('create-groups')}}>
        <AddCircleIcon/>
        </IconButton>

        <IconButton onClick={()=>{dispatch(toggleTheme)}}>
            {lightTheme&&(
        <NightlightIcon className={ "icon"+(lightTheme ? "":"dark")}/>)}
         {!lightTheme&&(
        <LightModeIcon className={ "icon"+(lightTheme ? "":"dark")}/>)}
        </IconButton>
        </div>
        
    </div>
    <div className="sb-search">
        <IconButton>
        <SearchIcon/>
        </IconButton>
        <input placeholder="search" className={"search-box "+ (lightTheme?"":" ")}/>
    </div>
   <Conversations/>

    </div>


   
}

export default Sidebar;


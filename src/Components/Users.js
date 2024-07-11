import React,{useState} from 'react';
import './myStyles.css';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../Images/live-chat-pic.png";
import ConversationsItem from './ConversationsItem';
function Users(){
    return (<div className='list-container'>
     <div className='ug-header'>
        <img src={logo} style={{height:"2rem",width:"2rem",marginLeft:"10px"}}/>
        <p className='ug-title'>Online Users</p>
     </div>
     <div className='sb-search'>
        <IconButton>
            <SearchIcon/>
            </IconButton>
            <input placeholder='Search' className='search-box'/>
     </div>
     <div className='ug-list'>
        <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
        </div>
        <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
        </div>
        <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
        </div>
        <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
        </div>
        <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
        </div>
        <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
        </div>
        <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
        </div>
        <div className='list-tem'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
        </div>
     </div>


    </div>
    )  
}


export default Users;
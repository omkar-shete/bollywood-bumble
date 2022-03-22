import React from 'react'
import './BottomNav.css'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import HexagonRoundedIcon from '@mui/icons-material/HexagonRounded';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';



//------------------COMPONENT-------------------
export default function BottomNav() {
  
  return (
    <div className='bottomNav'>

      <IconButton>
        <PersonIcon fontSize='large' style={{color:'gray'}}/> </IconButton>

      <Link to="/">
        <IconButton>  
          <HexagonRoundedIcon fontSize='large' style={{color:'gray'}}/> </IconButton>
      </Link>

      <Link to="/chats">
        <IconButton>
          <ChatBubbleIcon fontSize='large' style={{color:'gray'}}/> </IconButton>
      </Link>
    </div>
  )
}

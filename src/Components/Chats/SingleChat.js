import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';
import './SingleChat.css';


// -----------COMPO------------
export default function SingleChat({name, lastMsg, timestamp, picUrl}) {

  return (
    <div className='singleChat'>
      <Avatar className='pic' src={picUrl} fontSize='large'/>
      <div className='singleChat__details'>
        <h3>{name}</h3> 
        <p>{lastMsg}</p>
      </div>
      <div className="singleChat__timestamp">{timestamp}</div>
      
    </div>
  )
}

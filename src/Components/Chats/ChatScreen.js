import { Avatar } from '@mui/material';
import React from 'react';
import './ChatScreen.css';


// -------------------COMP------------
export default function ChatScreen() {

  const messages = [
    {
      msg: "Hello, sir"
    },
    {
      msg: "Big FAN!",
    },
    {
      name: "srk",
      msg: "Hello, thank you very much!",
      picUrl: "https://1.bp.blogspot.com/-4NG6EnY-1cs/XTsf05JgU-I/AAAAAAAAcDA/96cazQrXGaoDQhyRG7tk81RVW55Wj6TEwCLcBGAs/s1600/0a391ff95f731673bea99f40ca25ba46.jpg"
    }
  ];


  return (
    <div className='chatscreen'>
      <h3>You matched with SRK!!!</h3>

      {messages.map( msg=>(
        msg.name ?

        <div className='chatscreen__gotMsg'>
          <Avatar src={msg.picUrl}/>
          <p className="chatscreen__msg chatscreen__theirMsg">{msg.msg}</p>
        </div>
        
        :

        <div>
          <p className="chatscreen__msg chatscreen__ourMsg">{msg.msg}</p>
        </div>
        
      ))}

      <div className='chatscreen__textInput'>
        <form>
          <input className='chatscreen__input' type="text" placeholder='type your message here..'/>
        </form>
      </div>

    </div>
  )
}

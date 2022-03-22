import { Chat } from '@mui/icons-material';
import React from 'react';
import SingleChat from './SingleChat';
import './Chats.css';
import { Link } from 'react-router-dom';



// ---------------EXP-----------------

export default function Chats() {

  return (
    <div className='chats'>
      <h2>Set a date with your favorite movie star!</h2>
      <Link to="/chatscreen">
        <SingleChat name="SRK" lastMsg="dummy chat" timestamp="2 minutes ago" picUrl="https://1.bp.blogspot.com/-4NG6EnY-1cs/XTsf05JgU-I/AAAAAAAAcDA/96cazQrXGaoDQhyRG7tk81RVW55Wj6TEwCLcBGAs/s1600/0a391ff95f731673bea99f40ca25ba46.jpg"/>
      </Link>
      <SingleChat name="Deepika" lastMsg="..." timestamp="2 months ago" picUrl="https://freepngimg.com/thumb/deepika_padukone/28319-1-deepika-padukone-free-download.png"/>
      <SingleChat name="Ayushman" lastMsg="hmm" timestamp="2 minutes ago" picUrl="https://wallpaperaccess.com/full/2431375.jpg"/>
      <SingleChat name="Kriti" lastMsg="**blocked**" timestamp="2 minutes ago" picUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rueF4BQWAfikPR7ywPFNmAVZTnaIuKyfWQ&usqp=CAU"/>
    </div>
  )
}

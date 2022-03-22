import React from 'react';
import './Header.css';
//
import TuneIcon from '@mui/icons-material/Tune';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';




// ----------------COMPONENT--------------
export default function Header() {
  
  return (
    <div>
      <div className="header">
        
        <IconButton>
          <MenuIcon fontSize='large' style={{color:'gray'}}/> </IconButton>

        <div className="appName"> <h2>bollywood bumble</h2> </div> 

        <IconButton>
          <TuneIcon fontSize='large' style={{color:'gray'}}/> </IconButton>
      </div>
    </div>
  )
}

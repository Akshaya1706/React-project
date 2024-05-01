import React,{useEffect, useState} from 'react'
import AppBar from '@mui/material/AppBar';
import { Button,Tab,Tabs,Toolbar, Typography,useMediaQuery,useTheme} from '@mui/material';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import DrawerComp from './DrawerComp'; 
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { useNavigate } from 'react-router';
const PAGES=["Profile"]
const Logout = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    localStorage.removeItem('user');
    navigate(`/`);
    
  })
}

export default Logout;

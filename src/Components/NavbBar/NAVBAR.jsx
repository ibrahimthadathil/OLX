import React, { useContext, useEffect, useState } from 'react';

import './navbar.css'
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { Authcontext } from '../../context/fireContex';
import { fireContext } from '../../context/fireContex';
import { logout } from '../../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const  {user} = useContext(Authcontext)
  const {logout}=useContext(fireContext)
  const navigate = useNavigate()
  let userName =user?.displayName
  const userLogout = async()=>{
  await logout()
  
  }
 
  const login = (e)=>{
   if(!user){
    navigate('/signup')
   }
  }

  const addItem =()=>{
    if(!user){
      navigate('/signup')
    }else{
      navigate('/create')
    }

  }


  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span onClick={(e)=>login()}>{user ?  userName: 'Login'}</span>
          <hr />
           
        </div>

        {user ?<button style={{padding:'5px',borderRadius:'5px',border:'0px'}} onClick={(e)=>{userLogout()}}>Logout</button>:<></>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent" onClick={addItem}>
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

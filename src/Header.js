import React from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useState, useRef} from "react";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import App from './App';
import Dropdown from './Dropdown'
function Header() {
    const [inputSearch, setinputSearch] = useState("");
    const [isActive, setIsactive] = useState(false);
    const nav = useRef(null);
    const hamburger = useRef(null);

    const openMenu = () => {
        document.body.classList.add('off-nav-is-active');
        nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
        setIsactive(true);
      }
    
      const closeMenu = () => {
        document.body.classList.remove('off-nav-is-active');
        nav.current && (nav.current.style.maxHeight = null);
        setIsactive(false);
      }
    
      const keyPress = (e) => {
        isActive && e.keyCode === 27 && closeMenu();
      }
    
      const clickOutside = (e) => {
        if (!nav.current) return
        if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
        closeMenu();
      }

    return (
        <div className="header w-full">
            <div id="left" className="">
                <MenuIcon className='icon'/>
                <Link to={App.js}><img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/768px-YouTube_Logo_2017.svg.png" alt='Youtube'></img></Link>
            </div>
            <div id="middle" className="">
            <input id="search-bar" onChange={(e) => setinputSearch(e.target.value)} value={inputSearch} className="placeholder-gray-600" type="text" placeholder="Search"></input>
            <div className="srch border border-gray-400 bg-gray-100 rounded-r" >
            <Link to={`/search/${inputSearch}`}><SearchIcon className="search-button"/></Link>
            <span className='tooltip-text rounded'>Search</span>
            </div>
            <div className='mic'>
            <MicIcon className="ml-3 icon"/>
            <span className='tooltip-text rounded'>Search with your voice</span>
            </div>
            </div>
            <div id="right" className="">
                <div className='videocall-icon'>
                <VideoCallIcon className="icon mr-6" />
                <span className='tooltip-text rounded'>Create</span>
                </div>
            <div className='apps-icon'><AppsIcon className="icon mr-6" />
            <span className='tooltip-text rounded'>YouTube apps</span>
            </div>
            <div className='notification-icon'>
                <Dropdown icon={<NotificationsIcon className="icon mr-6" />}></Dropdown>
            <span className='tooltip-text rounded'>Notifications</span></div>
            <Avatar className="g-account mr-6 " src='https://media-exp1.licdn.com/dms/image/C5603AQEqkCdnbEtMvQ/profile-displayphoto-shrink_800_800/0/1605818561297?e=1619049600&v=beta&t=EsOtIjUY0WJISO_Aos3knpaRpKNHyUZDCS6TcSTbkWQ'/>
            </div>
        </div>
    )
}

export default Header

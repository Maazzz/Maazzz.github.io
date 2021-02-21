import React from 'react'
import { Avatar } from '@material-ui/core';
import './Playlist.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
function Playlist({image, title, channel, views, time, chanimage}) {
    return (
        <div>
            <div className='hoverr'>
            <img className='item thumbnail' src={image} alt=""/>
            <div className='play'>
                <span className='play-text'><PlayArrowIcon/> PLAY ALL</span>
            </div>
            <div className='inside-thumbnail'>
                <span className='inside-thumbnailtext'>50+</span>
            </div>
            <div className='item vid-infop'>
                <Avatar className='chaneel-icon' alt={channel} src={chanimage} ></Avatar>
                <div className="items Video-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} • {time}
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Playlist
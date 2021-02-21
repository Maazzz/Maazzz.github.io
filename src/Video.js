import React from 'react'
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import './Video.css'
function Video({image, title, channel, views, time, chanimage}) {
    return (
        <div className='video'>
            <div className='hover'>
            <img className='items thumbnail'  src={image} alt=""/>
            <div className='inside-thumbnailTop'>
                <div className='watch-later'><AccessTimeIcon className='clock' />
                <span className='tooltip-text'>WATCH LATER</span>
                </div>
            <div className='queue'><PlaylistPlayIcon className='playlist' />
            <span className='tooltip-text'>ADD TO QUEUE</span>
            </div>
            </div>
            <span className='duration'>5:36</span>
            <div className='items vid-info'>
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

export default Video

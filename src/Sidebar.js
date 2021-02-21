import React from 'react'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
function Sidebar() {
    return (
        <div id='sidebar' className="h-full overflow-y-auto">
            <div className='selected p-4 hover:bg-gray-300'><HomeIcon className="selected icon" /> <p className="">Home</p></div>
            <div className='p-4 hover:bg-gray-300'><WhatshotIcon className="icon"/><p className="-ml-2">Trending</p> </div>
            <div className='p-4 hover:bg-gray-300'><SubscriptionsIcon className="icon"/><p className="-ml-3">Subscription</p></div>
            <div className='p-4 hover:bg-gray-300'><VideoLibraryIcon className="icon"/><p className="-ml-1 mt-1">Library</p></div>
        </div>
    )
}

export default Sidebar

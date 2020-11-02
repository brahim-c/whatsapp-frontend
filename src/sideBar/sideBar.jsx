import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import SearchIcon from '@material-ui/icons/Search';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SideBarChat from '../sideBarChat/sideBarChat';
import { useStateValue } from '../stateProvider/stateProvider';

import './sideBar.styles.css';

function SideBar() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='sideBar'>
            <div className="sideBar__header">
                <Avatar src={user?.photoURL} alt={user?.displayName} />
                <h5>{user?.displayName}</h5>
                <div className="sideBar__headerRight">
                    <IconButton>
                    <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                    <ChatIcon />
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="sideBar__search">
                <div className="sideBar__searchContainer">
                    <SearchIcon />
                    <input placeholder='Search or start new chat' type="text"/>
                </div>
            </div>
            <div className="sideBar__chats">
                <SideBarChat />
                <SideBarChat />
            </div>
        </div>
    )
}

export default SideBar;

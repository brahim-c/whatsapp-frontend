import React from 'react';
import { Avatar } from '@material-ui/core';

import './sideBarChat.styles.css';

function SideBarChat() {
    return (
        <div className='sideBarChat'>
            <Avatar />
            <div className="sideBar__info">
            <h2>Room 1</h2>
            <p>last message</p>
            </div>
        </div>
    )
}

export default SideBarChat;

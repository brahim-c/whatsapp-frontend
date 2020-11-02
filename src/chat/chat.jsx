import React, { useEffect, useState } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../axios/axios';
import { auth, provider } from '../firebase/firebase';

import './chat.styles.css';
import { useStateValue } from '../stateProvider/stateProvider';

function Chat({ messages }) {

    const [input, setInput] = useState("");
    const [{ user }, dispatch] = useStateValue();


    const name = user?.displayName;
    const send = name === (user?.displayName);
    
    const sendMessage = async event => {
        event.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: name,
        });

        setInput("");
    }


    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                    <p className="chat__message  chat__sent">
                        <span className="chat__name">{message.name}</span>
                    {message.message}
                <span className='chat__timestamp'>
                        {message.timestamp}
                </span>
                </p>
                ))}            
            </div>
            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticonIcon />
                </IconButton>
                <form action="">
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type="text"></input>
                    <button onClick={sendMessage} type='submit'>send message</button>   
                </form>
                <IconButton>
                    <MicIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat;

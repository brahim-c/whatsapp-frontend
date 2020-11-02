import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from './chat/chat';
import SideBar from './sideBar/sideBar';
import Login from './login/login';
import Pusher from 'pusher-js';
import axios from './axios/axios';
import { useStateValue } from './stateProvider/stateProvider';

import './App.css';


function App() {

  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get('/messages/sync').then(response => {
      
      setMessages(response.data);
    })

  }, []);

  useEffect(() => {
    const pusher = new Pusher('1a8d1986d0b50ed93da9', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      setMessages([...messages, newMessage])
    });
    
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  console.log(messages);

  return (
    
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <Router>
            <Switch>
        
              <Route exact path='/'>
                <div className="app__body">
                  <SideBar />
                  <Chat messages={messages} />
                </div>
              </Route>
            </Switch>
      
    
          </Router>
        )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import { ChatListItem } from './components/ChatListItem';
import { ChatIntro } from './components/ChatIntro';
import { ChatWindow } from './components/ChatWindow';

export const App=  () => {

  const [chatList, setChatList] = useState([
    {chatId: 1, title: 'Anderson Oliveira', image: 'https://th.bing.com/th/id/OIP.m5IPjbtP__xtoz0TK6DRjQHaHa?pid=ImgDet&rs=1'},
    {chatId: 2, title: 'Miguel Sousa', image: 'https://th.bing.com/th/id/OIP.m5IPjbtP__xtoz0TK6DRjQHaHa?pid=ImgDet&rs=1'},
    {chatId: 3, title: 'Paula Fernandes', image: 'https://th.bing.com/th/id/OIP.m5IPjbtP__xtoz0TK6DRjQHaHa?pid=ImgDet&rs=1'},
    {chatId: 4, title: 'Ana Clara', image: 'https://th.bing.com/th/id/OIP.m5IPjbtP__xtoz0TK6DRjQHaHa?pid=ImgDet&rs=1'}
  ]);
  const [activeChat, setActiveChat] =useState({});
  return (
    <div className='app-window'>
      <div className='sidebar'>
        
        <header>
          <img className='header--avatar' src='https://th.bing.com/th/id/OIP.m5IPjbtP__xtoz0TK6DRjQHaHa?pid=ImgDet&rs=1' alt='avatar-person'/>
          <div className='header--buttons'>
            <div className='header--btn'>
              <DonutLargeIcon style={{color:'#919191'}} />
            </div>
            <div className='header--btn'>
              <ChatIcon style={{color:'#919191'}} />
            </div>
            <div className='header--btn'>
              <MoreVertIcon style={{color:'#919191'}} />
            </div>
          </div>
        </header>

        <div className='search'>
          <div className='search--input'>
            <SearchIcon fontSize="small" style={{color: '#919191'}} />
            <input type='search' placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>

        <div className='chatList'>
          {chatList.map((item, key) => (
            <ChatListItem 
              key={key}
              data={item}
              active={activeChat.chatId === chatList[key].chatId}
              onClick={() => setActiveChat(chatList[key])}
            />
          ))}
        </div>
      </div>
      <div className='contentarea'>
        {activeChat.chatId !== undefined && 
          <ChatWindow />
        }

        {activeChat.chatId === undefined &&
          <ChatIntro />
        }
      </div>
    </div>
  );
}
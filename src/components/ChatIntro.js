import React from 'react';

import './ChatIntro.css';

export const ChatIntro = () => {
    return (
        <div className='chatIntro'>
            <img src='https://whatsapp-clone-web.netlify.app/static/media/intro-connection-light.5690d473.jpg' alt=''/>
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta o seu telefone para sincronizar suas mensagens. <br/> Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.</h2>
        </div>
    );
}
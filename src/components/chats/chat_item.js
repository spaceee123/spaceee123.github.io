import React from 'react';
import avatar from '../../img/avatar.jpg'
import './chat_item.css'

const ChatItem = ({}) => {
    return (
        <div className={"chat_item_container"}>
            <img src={avatar} className={"avatar"} alt="error"/>
            <div className={"right"}>
                <div className={"rightop"}>
                    <p className="name">
                        L Lowlite (fonarik)
                    </p>
                    <p className="data">
                        date
                    </p>
                </div>
                <div className="message">
                    <p className="message-text">Не бывает безвыходных ситуаций… Тебе просто нужно умереть раньше, чем они тебя убьют.</p>
                </div>
            </div>
        </div>
    );
};

export default ChatItem;
import React from 'react';
import './message.scss'

const Message = () => {
    return (
        <div className={"message_block owner"}>
            <div className="messageInfo">
                <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="" className={"user_message_avatar"}/>
                <span>just now</span>
            </div>

            <div className="messageContent">
                <p>hello</p>
                <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" alt="" className={"user_message_avatar"}/>
            </div>
        </div>
    );
};

export default Message;
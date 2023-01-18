import React from 'react';
import Message from "./Message/Message";
import "./mainMessageBlock.scss"
import skrepka from "../../../img/skrepka.svg"
import upload from "../../../img/upload.png"
const MainMessageBlock = () => {
    return (
        <div className="messages_full_block">
           <div className={"messages"}>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>
               <Message/>

           </div>
            <div className={"input_block"}>
                <input type="text" placeholder="Type something..." className={"message_input"}/>
                <div className={"send"}>
                <img src={skrepka} alt="" className={"skrepka"}/>
                <input type="file" style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img src={upload} alt="" className={"upload"}/>
                </label>
                <button className={"send_message_btn"}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default MainMessageBlock;
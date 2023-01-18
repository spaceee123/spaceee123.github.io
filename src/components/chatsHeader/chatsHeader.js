import React from 'react';
import burger from "../../img/burger.svg";
import './Chats-container.css'

const ChatsHeader = () => {
    return (
        <div className={"header_components"}>
            {/*Бургер кнопка*/}
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><img
                alt={"error"} src={burger}/>
            </button>
            {/*Бургер кнопка*/}


            {/*Поиск в хедере*/}
            <input className={"search_header"} type="search" placeholder={" Поиск..." }/>
            {/*Поиск в хедере*/}
            
        </div>
    );
};

export default ChatsHeader;
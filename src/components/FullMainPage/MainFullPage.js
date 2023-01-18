import React from 'react';
import Sidebar from "../sidebar/sidebar";
import ChatsContainer from "../chats/Chats_container";
import UnitedBlocks from "../MessagePage/unitedBlocks";
import "../../App.css"

const MainFullPage = () => {
    return (
        <div className={"flex"}>
            <Sidebar/>
            <ChatsContainer/>
            <UnitedBlocks/>
        </div>
    );
};

export default MainFullPage;
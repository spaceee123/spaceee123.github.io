import React from 'react';
import avatar from '../../../img/avatar.jpg'
import './sidebarContent.css'


const SidebarContent = (props) => {
    return (
        <div>
            {/*Сайдбар аватар*/}
            <img src={avatar} className={"avatar"} alt="error"/>
            {/*Сайдбар имя */}
            <p><strong>name</strong></p>

        </div>
    );
};

export default SidebarContent;
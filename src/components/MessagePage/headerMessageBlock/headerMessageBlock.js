import React from 'react';
import search from '../../../img/search.svg'
import threeDots from '../../../img/threeDotsl.svg'
import call from '../../../img/call.png'
import './headerMessageBlock.scss'


const HeaderMessageBlock = () => {
    return (
        <div className="MessageHeader_container">
            <div className={"MessageHeader_LeftSide"}>
                <p>
                    Username
                </p>
                <p>
                    data
                </p>
            </div>
            <div className="MessageHeader_RightSide">
                <img src={search} alt="" className="MessageHeader_menu_items"/>
                <img src={call} alt="" className="MessageHeader_menu_items"/>
                <img src={threeDots} alt="" className="MessageHeader_menu_items"/>
            </div>
        </div>
    );
};

export default HeaderMessageBlock;
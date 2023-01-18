import React from 'react';
import HeaderMessageBlock from "./headerMessageBlock/headerMessageBlock";
import MainMessageBlock from "./mainMessageBlock/mainMessageBlock";
import './unitedBlocks.css'

const UnitedBlocks = () => {
    return (
        <div className="UnitedBlocksContainer">
            <HeaderMessageBlock/>
            <MainMessageBlock/>
        </div>
    );
};

export default UnitedBlocks;
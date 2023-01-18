import React from 'react';
import './sidebar.css'
import SidebarContent from "./sidebarContent/sidebarContent";
import SidebarMenu from "./sidebarContent/sidebarMenu/sidebarMenu";


const Sidebar = (props) => {

    return (
        <div>

         {/*Сайдбар меню*/}
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions"
                 aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    <SidebarContent />

                </div>
                <div className="">
                    <hr className={"sidebar__line"}/>
                    <SidebarMenu/>

                </div>
            </div>
            {/*Сайдбар меню*/}
        </div>
    );
};

export default Sidebar;
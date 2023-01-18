import React, {useState} from 'react';
import s from './sidebarMenu.module.css'
import group from '../../../../img/group.png'
import chanel from '../../../../img/chanel.png'
import saved from '../../../../img/saved.svg'
import settings from '../../../../img/settings.svg'
import nightmode from '../../../../img/nightmode.png'
import Modal from "../../../modalWindow/channel create";
import {signOut} from "firebase/auth"
import {auth} from "../../../../firebase";
const SidebarMenu = () => {
    const [isModal, setModal]=useState(false)
    return (
        <div>
            {/*Сайдбар меню - кнопки*/}
            <ul className={s.sidebar_menu}>
                <div className={s.split}><img src={group} className={s.menu_img} alt=""/>
                 <li className={s.menu_items}> Создать группу</li>
                </div>
                <div  onClick={()=>setModal(true)} className={s.split}><img src={chanel} className={s.menu_img} alt=""/>
                 <li  className={s.menu_items}> Создать канал</li>
                </div>
                <div className={s.split}><img src={saved} className={s.menu_img} alt=""/>
                 <li className={s.menu_items}> Избранное</li>
                </div>
                <div className={s.split}><img src={settings} className={s.menu_img} alt=""/>
                 <li className={s.menu_items}> Настройки</li>
                </div>
                <div className={s.split}><img src={nightmode} className={s.menu_img} alt=""/>
                 <li className={s.menu_items}> Светлый режим</li>
                </div>
                <div className={s.split}>
                    <button className={"LogOutBtn"} onClick={()=>signOut(auth)}>Выйти из аккаунта</button>
                </div>
            </ul>
            <Modal
                isVisible={isModal}
                title="Создать канал"
                content={<p>Введите название канала</p>}
                footer={<button className={s.modalClose_btn}>Закрыть</button>}
                onClose={() => setModal(false)}
            />
            {/*Сайдбар меню - кнопки*/}

        </div>
    );
};

export default SidebarMenu;
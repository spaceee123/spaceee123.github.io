import React, {useEffect, useRef, useState} from 'react';
import ChatsHeader from "../chatsHeader/chatsHeader";
import '../chatsHeader/Chats-container.css'
import ChatItem from "./chat_item";

const ChatsContainer = () => {
    const ref = useRef(null);
    const refRight = useRef(null);

    useEffect(() => {
        const resizeableEle = ref.current;
        const styles = window.getComputedStyle(resizeableEle)
        let width = parseInt(styles.width, 10)
        let x = 0;
        //Right resize
        const onMouseMoveRightResize = (event) => {
            const dx = event.clientX - x;
            x = event.clientX;
            width = width + dx;
            resizeableEle.style.width = `${width}px`
        }
        const onMouseUpRightResize = (event) => {
            document.removeEventListener("mousemove", onMouseMoveRightResize)
        }

        const onMouseDownRightResize = (event) => {
            x = event.clientX;
            resizeableEle.style.left = styles.left;
            resizeableEle.style.right = null;
            document.addEventListener("mousemove", onMouseMoveRightResize)
            document.addEventListener("mouseup", onMouseUpRightResize)
        }

        const resizerRight = refRight.current;
        //Add mouse down event listener
        resizerRight.addEventListener("mousedown", onMouseDownRightResize)
        return () => {
            resizerRight.removeEventListener("mousedown", onMouseDownRightResize)
        }
    })

    const [active, setActive] = useState(true)
    const HandleClick = () => {
        setActive((active) => !active)
        console.log("active")
    }


    return (

        <div ref={ref} className={"resizeable"}>

            <div className={"chats_container"}>
                <ChatsHeader/>
                <div className={"chats_container_scroll"}>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                </div>
            </div>
            <div ref={refRight} className={"resizer resizer-r"}/>


        </div>

    );
};

export default ChatsContainer;
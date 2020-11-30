import React, { useState } from "react";
// import SignIn from './SignIn';
import './Modal.css';

function Modal () {
    const [ modalState, setModalState ] = useState(false)

    const toggleModalState = () => {
        setModalState(!modalState)
    }

    return (
    <div className="Modal">
        <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
            <div className="modalImage">
                <img src="https://images.unsplash.com/photo-1496934373448-f606ecd4ad6b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" alt="modalPic"/>
                </div>
                <div className="modalText">
                    <h2>This is a modal header line</h2>
                    {/* <p><SingIn /></p> */}
                <form action="">
                    <button>Join now!</button>
                </form>
                <button className="exitButton" onClick={() => toggleModalState()}>
                    exit
                </button>
                </div>
                </div>
                </div>
        <button onClick={() => toggleModalState()}>SignIn</button>
    </div>
    );
}

export default Modal;
import React from 'react';
import Backdrop from './backdrop';
let memoizedModal = null;

const Modal = ({ children, show, clicked }) => {
    return (
        <>
            <Backdrop show={show} clicked={clicked}/>
            <div 
                style={{
                    position: "fixed",
                    zIndex: 500,
                    width: '440px',
                    textAlign: 'center',
                    border: '1px solid #ccc',
                    boxShadow: '1px 1px 1px black',
                    backgroundColor: 'white',
                    padding: '16px',
                    left: "",
                    top: '30%',
                    boxSizing: 'border-box',
                    transition: 'all .3s ease-out',
                    transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: show ? '1' : '0'
                }}
                >
                {children}
            </div>
        </>
    )
}

export default memoizedModal = React.memo(Modal);

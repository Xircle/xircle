import React from 'react';

function Backdrop({ show, clicked }) {
    return (
        show ? ( 
            <div 
                style={{backgroundColor: 'rgba(0, 0, 0, .7'}}
                className="w-full h-full z-30 fixed left-0 top-0" 
                onClick={clicked}
            /> 
        )
        : null
    )
}

export default Backdrop;
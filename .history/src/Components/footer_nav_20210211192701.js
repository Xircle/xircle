import React from 'react';
import { NavLink } from 'react-router-dom';

const footer_nav = () => {
    return (
        <footer
            style={{ borderTop: '1px solid #ccc' }}
            className="flex flex-row w-full justify-evenly absolute bottom-0 py-5 bg-gray-100"
        >
            <NavLink to="/person">
                <img 
                    src="person.svg"
                    width={35}
                    height={35}
                />
            </NavLink>
            <Link to="/people-circle">
                <img 
                    src="people-circle.svg"
                    width={35}
                    height={35}
                />
            </Link>
            <Link to="/globe">
                <img 
                    src="globe.svg"
                    width={35}
                    height={35}
                />
            </Link>
            <Link to="love-me">
                <img 
                    src="heart-outline.svg"
                    width={35}
                    height={35}
                />
            </Link>
            <Link to="/profile">
                <img 
                    src="profile.svg"
                    width={35}
                    height={35}
                />
            </Link>
        </footer>
    )
}

export default footer_nav;
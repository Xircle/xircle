import React from 'react'
import Footer_nav from './footer_nav';

const Layout = ({ children }) => {
    return (
        <div 
            style={{ minWidth: "320px", maxWidth: "414px", border: "1px solid gray"}}
            className="flex flex-col mx-auto h-screen relative"
        >
            {/*  main custom  */}
            <main>
                {children}
            </main>

            {/* footer */}
            <Footer_nav />
        </div>
    )
}

export default Layout;
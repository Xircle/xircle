import React from 'react';

const Layout = ({ children}) => {
  return (
    <>
        {/* header */}
        <main>
            {children}
        </main>

        <footer>
        </footer>
    </>
  );
}

export default Layout;

import React from 'react';

const Layout = ({ children}) => {
  return (
    <>
        <header className="flex flex-row justify-between px-10 py-7">
            <h1 className="text-3xl font-bold">연고링</h1>
            <ul className="flex flex-row mx-5">
                <li className="text-2xl font-bold">사용법</li>
                <li className="text-2xl font-bold">로그인</li>
            </ul>
        </header>

        <main>
            {children}
        </main>

        <footer>
        </footer>
    </>
  );
}

export default Layout;

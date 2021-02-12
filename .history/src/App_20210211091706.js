import React from 'react';
import Layout from './Components/layout';
import bgImg from './images/yk.png';

const App = () => {
  return (
    <>
      <Layout>

        <section className="h-screen">
          
          <div 
            style={{
              backgroundImage: `url(${bgImg})`,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',  
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="w-full h-full" style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}>
              <h1 className="flex justify-center w-full h-full items-center text-6xl text-white left z-100">가슴뛰는 대학생활 연고링과 함께.</h1>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}

export default App;

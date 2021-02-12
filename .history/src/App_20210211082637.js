import React from 'react';
import Layout from './Components/layout';

const App = () => {
  return (
    <>
      <Layout>
        <section className="h-screen">
          {/* <img 
            src={bgImg} alt="bgImg"
          /> */}
          <div 
            style={{
              backgroundImage: `url(${require('./images/yk.png')})`,
              backgroundSize: "cover",
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',  
              backgroundAttachment: 'fixed'
            }}
          />
            here
        </section>
        <section className="h-screen">
            개인정보
        </section>
      </Layout>
    </>
  );
}

export default App;

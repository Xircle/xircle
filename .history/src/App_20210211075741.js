import React from 'react';
import Layout from './Components/layout';
import bgImg from './public/yk.png'; 

const App = () => {
  return (
    <>
      <Layout>
          <section className="h-screen">
            <div 
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',  
                backgroundAttachment: 'fixed'
              }}
            />
              here
          </section>
      </Layout>
    </>
  );
}

export default App;

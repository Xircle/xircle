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
            <div className="w-full h-full" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
              <h1 className="flex justify-center w-full pt-56 text-5xl md:text-7xl lg:text-7xl font-bold text-white text-center leading-normal md:leading-normal lg:leading-normal">가슴뛰는 대학생활 <br /> 연고링과 함께.</h1>
              <button className=" text-red-600 w-48 h-16 rounded-3xl bg-gray-500">계정 만들기</button>
            </div>
          </div>
        </section>

      </Layout>
    </>
  );
}

export default App;

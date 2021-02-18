import React, {useState, useEffect} from 'react';
import bgImg from '../images/yk.png';
import Modal from '../components/UI/modal';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
  const [isclicked, setClicked] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <React.Fragment>
      {/* Header */}
      <header className="absolute w-full flex flex-row justify-between items-center px-10 py-7">
          <h1 className="text-3xl font-bold text-white">연고링</h1>
          <nav>
              <ul className="flex flex-row items-center ">
                  <li className="text-xl font-bold mx-5 text-white">사용법</li>
                  <li className="text-xl font-bold mx-3 text-white">
                    <button onClick={() => setClicked(true)} className="font-sans text-white px-5 py-2 rounded-xl bg-transparent-600 font-bold border-2 hover:bg-white hover:text-black focus:outline-none">로그인</button>
                  </li>
              </ul>
          </nav>
      </header>

      {/* main */}
      <main>
        <section className="h-screen">

          {/* 모달 */}
          <Modal show={isclicked} clicked={() => setClicked(false)}>
            <div className="my-5 text-2xl font-bold">
              <img 
                src="https://2donny.github.io/ykring/yk-logo.png"
                alt="yk-logo"
                width={50}
                height={50}
                className="mb-5 rounded-full text-center mx-auto"
              />
              <i>계정 만들기</i>
            </div>
            <div>
              <span style={{ fontSize: '14px', color: '#5c5c5c'}}>'로그인'을(를) 함으로써 연고링 이용약관에 동의합니다.<br /> 연고링은 학교 인증 기반 웹 어플리케이션으로서 인증하기 위해서는 학교 메일을 통하여 인증해야합니다.</span>
            </div>
            <div>
              <Link to="/person">
                <button onClick={() => console.log('clicked')} className="font-sans w-full border-2 rounded-3xl px-5 py-3 mt-10 hover:text-white hover:bg-black focus:outline-none">학교 이메일로 인증하기</button>
              </Link>
            </div>
          </Modal>

          {/* 메인 글귀 */}
          <article 
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
            <div className="flex flex-col items-center w-full h-full" style={{backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
              <div data-aos="fade-up" data-aos-duration="2500" className="text-center">
                <h1 
                  className="w-full pt-56 text-5xl md:text-7xl lg:text-7xl font-bold text-white text-center leading-normal md:leading-normal lg:leading-normal"
                >
                  가슴뛰는 대학생활 <br /> 연고링과 함께
                </h1>
                <p className="text-white text-xs">서울대 고려대 연세대 성균관대 서강대 한양대 대상 <br/> 시범 서비스 진행</p>
                <button 
                  onClick={() => setClicked(true)} 
                  className="font-sans text-white w-48 h-16 mt-10 rounded-3xl bg-transparent-600 border-2 hover:bg-white hover:text-black focus:outline-none"
                > 
                  계정 만들기
                </button>
              </div>
            </div>
          </article>

          {/* Banner */}
          {/* <div className="flex flex-row justify-center items-center absolute bottom-0 w-full h-32 bg-gray-400">
            <p className="text-white text-xl font-bold"> 인스타에 홍보하고 기프티콘 받기</p>
          </div> */}

        </section>
      </main>

      {/* footer */}
      {/* <footer>
        <div className="w-full h-56">
          <h1>동기부여</h1>
          
        </div>
      </footer> */}
    </React.Fragment>
  );
}

export default Intro;
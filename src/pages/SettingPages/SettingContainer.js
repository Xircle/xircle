import React from 'react';
import SettingProgress from './SettingProgress/SettingProgress';
import SettingContents from './SettingContents/SettingContents';
import Layout from '../../components/layout';

const SettingContainer = ({ history, match }) => {
    const num = match.params.questionNum;
    return (
        <>
        {num !== '12' ? (
            <div className="w-full overflow-x-hidden">
                <Layout headerNone footerNone>
                    <nav style={{height: '7%', borderBottom: '0.5px solid #ccc'}} className="flex flex-row items-center justify-between border-b-2">
                        <img
                            onClick={() => history.goBack()} 
                            style={{width: '25px', height: '25px', cursor: 'pointer'}}
                            src="/arrow-back-outline.svg"
                            alt="back"
                        />
                        <p style={{marginRight: '30px'}} className="w-full text-lg text-center">회원가입</p>
                    </nav>
                    <SettingProgress questionNum={num}/>
                    <SettingContents history={history} questionNum={num}/>
                </Layout>
            </div>
        ) : (
            <div className="w-full">
                <Layout headerNone footerNone>
                    <SettingContents history={history} questionNum={num}/>
                </Layout>
            </div>
        )}
        </>
    )
}
export default SettingContainer; 
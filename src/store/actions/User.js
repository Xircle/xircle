import * as actionTypes from './actionTypes';
import Axios from '../../axios-instance';


export const addAge = (age) => {
    return {
        type: actionTypes.ADD_AGE,
        age,
    }
}
export const addGender = (gender) => {
    return {
        type: actionTypes.ADD_GENDER,
        gender,
    }
}

export const addJob = (job) => {
    return {
        type: actionTypes.ADD_JOB,
        job,
    }
}

export const addAdj = (adj) => {
    return {
        type: actionTypes.ADD_ADJ,
        adj,
    }
}

export const addLocation = (location) => {
    return {
        type: actionTypes.ADD_LOCATION,
        location,
    }
}
export const addArticleImgSrc = (articleImgSrc) => {
    return {
        type: actionTypes.ADD_ARTICLE_IMGSRC,
        articleImgSrc,
    }
}

export const addArticleText = (articleText) => {
    return {
        type: actionTypes.ADD_ARTICLE_TEXT,
        articleText,
    }
}

export const addInterest = (interestArr) => {
    return {
        type: actionTypes.ADD_INTEREST,
        interestArr,
    }
}


// displayName check

export const displayNameStart = () => {
    return {
        type: actionTypes.DISPLAYNAME_START,
    }
}
export const displayNameSuccess = (displayName) => {
    return {
        type: actionTypes.DISPLAYNAME_SUCCESS,
        displayName,
    }
}
export const displayNameFail = () => {
    return {
        type: actionTypes.DISPLAYNAME_FAIL,
    }
}
export const displayName = (displayName) => {
    return dispatch => {
        dispatch(displayNameStart());

        Axios.post('/check/name', displayName)
            .then(res => {
                console.log(res);
                dispatch(displayNameSuccess(displayName));
            })
            .catch(err => {
                console.log(err);
                alert('네트워크 혹은 서버에 일시적인 오류가 있습니다. 다시 시도해주세요');
                dispatch(displayNameFail());
            })
    }
}

// -----

export const addIntroText = (introText) => {
    return {
        type: actionTypes.ADD_INTRO_TEXT,
        introText,
    }
}
export const addProfileImgSrc = (ProfileImgSrc) => {
    return {
        type: actionTypes.ADD_PROFILE_IMG_SRC,
        ProfileImgSrc
    }
}

export const addInstagramId = (instagramId) => {
    return {
        type: actionTypes.ADD_INSTA_ID,
        instagramId
    }
}


// SubmitToServer
export const submitToServerStart = () => {
    return {
        type: actionTypes.SUBMIT_TO_SERVER_START,
    }
}

export const submitToServerSuccess = () => {
    return {
        type: actionTypes.SUBMIT_TO_SERVER_SUCCESS,
    }
}
export const submitToServerFail = () => {
    return {
        type: actionTypes.SUBMIT_TO_SERVER_FAIL,
    }
}

export const submitToServer = (genderInRedux, ageInRedux, jobInRedux, adjInRedux, locationInRedux, articleImgSrcInRedux, articleTextInRedux, displayName, interestArrInRedux, introTextInRedux, profileImgSrcInRedux, instagramIdInRedux) => {
    return dispatch => {
        dispatch(submitToServerStart());
        
        const userData = {
            genderInRedux, 
            ageInRedux, 
            jobInRedux, 
            adjInRedux, 
            locationInRedux, 
            articleImgSrcInRedux, 
            articleTextInRedux, 
            displayName, 
            interestArrInRedux, 
            introTextInRedux, 
            profileImgSrcInRedux, 
            instagramIdInRedux
        };
        Axios.post('/pre/user', userData)
            .then(res => {
                console.log(res);
                dispatch(submitToServerSuccess());
            })
            .catch(err => {
                console.log(err);
                alert('네트워크 혹은 서버에 일시적인 오류가 있습니다. 다시 시도해주세요');
                dispatch(submitToServerFail());
            })
    }
}


export const updateProfileImg = (updatedProfileImg) => {
    return {
        type: actionTypes.UPDATE_PROFILE_IMG,
        updatedProfileImg,
    }
}

export const updateProfileImgToServer = (updatedProfileImg) => {
    return dispatch => {
        dispatch(updateProfileImg(updatedProfileImg));
        // 서버에 보내기
    }
}

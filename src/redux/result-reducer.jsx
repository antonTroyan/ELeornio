import cloneDeep from 'lodash/cloneDeep';

const INCREASE_ATTEMPT = "INCREASE_ATTEMPT"

const initialState = {
    numberAttempt : 0
}

const resultReducer = (state = initialState, action) => {

    switch (action.type) {

    case INCREASE_ATTEMPT: {

    }

     default:
     return state;
    }
}


export const increaseAttemptCounterActionCreator = () => ({type: INCREASE_ATTEMPT})

export default resultReducer
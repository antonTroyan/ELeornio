import cloneDeep from 'lodash/cloneDeep';

const INCREASE_ATTEMPT = "INCREASE_ATTEMPT"

const initialState = {
    numberAttempt : 0
}

export const resultReducer = (state = initialState, action) => {

    switch (action.type) {

    case INCREASE_ATTEMPT: {
        const clonedState = cloneDeep(state)
        clonedState.numberAttempt = clonedState.numberAttempt + 1
        return clonedState
    }

    default:
        return state;
    }
}

export const increaseAttemptCounterActionCreator = () => ({type: INCREASE_ATTEMPT})
import cloneDeep from 'lodash/cloneDeep';
import englishPic from "../resources/english.jpg";
import filmsPic from "../resources/films.jpg";
import internetPic from "../resources/internet.jpg";
import seriesPic from "../resources/series.jpg";
import shufflePic from "../resources/shuffle.jpg";
import englishClasses from "./material/english-classes"
import series from "./material/series"
import films from "./material/films"
import internet from "./material/internet"

const initialState = {
    score: 0,
    materials: [
        {
            key: 0,
            image: shufflePic,
            title: 'Shuffle',
            linkToMaterial: 'https://ru.wikipedia.org/wiki/%D0%A8%D0%B0%D1%84%D1%84%D0%BB',
            tasks: []
        },

        {
            key: 1,
            image: englishPic,
            title: 'Godel classes',
            linkToMaterial: '',
            tasks: englishClasses
        },

        {
            key: 2,
            image: seriesPic,
            title: 'Series',
            linkToMaterial: '',
            tasks: series
        },

        {
            key: 3,
            image: filmsPic,
            title: 'Films',
            linkToMaterial: 'https://en.wikipedia.org/wiki/Computer_programming',
            tasks: films
        },

        {
             key: 4,
             image: internetPic,
             title: 'Internet',
             linkToMaterial: '',
             tasks: internet
        },


    ]
}


const HANDLE_CORRECT = "HANDLE_CORRECT"
const HANDLE_WRONG = "HANDLE_WRONG"

const INCREASE_COMPLEXITY_STEP = 30
const DECREASE_COMPLEXITY_STEP = 30

let LAST_ANSWER = ""

export const mainPageReducer = (state = initialState, action) => {

    switch (action.type) {

        case HANDLE_CORRECT: {
            const selectedWord = action.key
            if (isSameAnswerCheck(selectedWord)) {
                return state
            }
            const clonedState = cloneDeep(state)
            clonedState.materials.map(material => {
                return material.tasks.map(e => increaseComplexityHandleElements(e, selectedWord))
            })
            clonedState.score = clonedState.score + 1
            return clonedState;
        }


        case HANDLE_WRONG: {
            const selectedWord = action.key
            if (isSameAnswerCheck(selectedWord)) {
                return state
            }
            const clonedState = cloneDeep(state)
            clonedState.materials.map(material => {
                return material.tasks.map(e => decreaseComplexityHandleElements(e, selectedWord))
            })
            clonedState.score = 0
            return clonedState;
        }

        default:
            return state;
    }
}

const increaseComplexityHandleElements = (wordPair, selectedWord) => {
    if (wordPair.russianWord === selectedWord || wordPair.correctAnswer === selectedWord) {
        const increasedResult = wordPair.complexity + INCREASE_COMPLEXITY_STEP
        if (increasedResult < 100) {
            wordPair.complexity = increasedResult
        }
    }
    return wordPair
}

const decreaseComplexityHandleElements = (wordPair, selectedWord) => {
    if (wordPair.russianWord === selectedWord || wordPair.correctAnswer === selectedWord) {
        const decreasedResult = wordPair.complexity - DECREASE_COMPLEXITY_STEP
        if (decreasedResult > 1) {
            wordPair.complexity = decreasedResult
        }
    }
    return wordPair
}


const isSameAnswerCheck = (selectedWord) => {
    // handle excess pressing same button
    if (selectedWord === LAST_ANSWER) {
        return true
    }
    LAST_ANSWER = selectedWord
    return false
}



export const handleCorrectVariantActionCreator = (key) => ({type: HANDLE_CORRECT, key: key})
export const handleWrongVariantActionCreator = (key) => ({type: HANDLE_WRONG, key: key})
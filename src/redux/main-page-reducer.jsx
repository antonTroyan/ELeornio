import cloneDeep from 'lodash/cloneDeep';
import englishPic from "../resources/english.jpg";
import filmsPic from "../resources/films.jpg";
import phrasesPic from "../resources/phrases.png";
import seriesPic from "../resources/series.jpg";
import shufflePic from "../resources/shuffle.jpg";
import englishClasses from "./material/english-classes.jsx"
import series from "./material/series.jsx"
import films from "./material/films.jsx"
import phrases from "./material/phrases.jsx"

const initialState = {
    isInitialized: false,
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
            image: phrasesPic,
            title: 'Phrases',
            linkToMaterial: '',
            tasks: phrases
        },
    ]
}


const HANDLE_CORRECT = "HANDLE_CORRECT"
const HANDLE_WRONG = "HANDLE_WRONG"
const INITIALIZE_COMPLEXITY = "INITIALIZE_COMPLEXITY"

const INCREASE_COMPLEXITY_STEP = 20
const DECREASE_COMPLEXITY_STEP = 20
const MINIMUM_PROBABILITY = 5
const INITIAL_COMPLEXITY = 60

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
                return material.tasks.map(e => decreaseComplexityHandleElements(e, selectedWord))
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
                return material.tasks.map(e => increaseComplexityHandleElements(e, selectedWord))
            })
            const newState = clonedState.score - 5
            clonedState.score = newState >= 0 ? newState : 0
            return clonedState;
        }

        case INITIALIZE_COMPLEXITY: {
            const clonedState = cloneDeep(state)
            clonedState.materials.map(material => {
                 return material.tasks.map(e => {
                    return e.complexity = INITIAL_COMPLEXITY
                 })
            })
            clonedState.isInitialized = true
            return clonedState;
        }

        default:
            return state;
    }
}

const increaseComplexityHandleElements = (wordPair, selectedWord) => {
    if (wordPair.russianWord === selectedWord || wordPair.correctAnswer === selectedWord) {
        const increasedResult = wordPair.complexity + INCREASE_COMPLEXITY_STEP
        if (increasedResult < 101) {
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
        } else {
            wordPair.complexity = MINIMUM_PROBABILITY
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
export const initializeComplexityActionCreator = () => ({type: INITIALIZE_COMPLEXITY})
import React, {useState} from 'react';
import Button from "@material-ui/core/Button";
import cloneDeep from 'lodash/cloneDeep';
import {takeRandomElements} from "../../util/util";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";
import TestResultComponent from "./TestResultComponent";
import {LinearProgress, ListItem, ListItemText} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import Container from '@mui/material/Container';

const initialTestResult = {
    0: undefined,
    1: undefined,
    2: undefined,
    3: undefined,
    4: undefined,
    5: undefined,
    6: undefined,
    7: undefined,
    8: undefined,
    9: undefined,
    10: undefined
}

const TranslateGameComponent = (props) => {

    const shuffleUrl = '0';

    function createArrayAllWords(materials) {
        let arrayWithAllWords = [];
        materials.forEach(material => {
            material.tasks.forEach(task => {
                arrayWithAllWords.push(task);
            })
        })
        return arrayWithAllWords;
    }

    const extractCorrectArray = (materials) => {
        let result;
        if (props.materialIdUrl === shuffleUrl) {
            result = takeRandomElements(10, createArrayAllWords(materials));
        } else {
            result = takeRandomElements(10, props.materials[props.materialIdUrl].tasks);
        }
        return result;
    }

    const [currentTaskId, setCurrentTaskId] = useState(1)
    const [testResult, setTestResult] = useState(initialTestResult)
    const [tasks, setTasks] = useState(extractCorrectArray(props.materials))
    const [preparedAnswers, setPreparedAnswers] = useState(null)
    const [russianWord, setRussianWord] = useState(null)

    const clearGameData = () => {
        setCurrentTaskId(1)
        setTestResult(initialTestResult)
        setTasks((extractCorrectArray(props.materials)))
        setPreparedAnswers(null)
        setRussianWord(null)
    }

    const shuffle = (a) => {
        let j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    function ListItemLink(props) {
        return <ListItem button component="a" {...props} />;
    }

    const prepareAnswers = () => {
        let isCorrectAnswerAlreadyIn = false

        const wrongAnswers = takeRandomElements(4, tasks)
        const result = wrongAnswers.map((element) => {
            if (element.correctAnswer === tasks[currentTaskId].correctAnswer) {
                isCorrectAnswerAlreadyIn = true
            }
            return (
                createAnswerItem(element.correctAnswer)
            )
        })
        if (!isCorrectAnswerAlreadyIn) {
            result[0] = createAnswerItem(tasks[currentTaskId].correctAnswer)
        }

        return shuffle(result)
    }


    const createAnswerItem = (correctAnswer) => {
        return (
            <ListItemLink
                key={correctAnswer}
                onClick={handleChooseVariant}>
                <ListItemText primary={correctAnswer}/>
            </ListItemLink>
        )
    }

    const handleChooseVariant = (e) => {
        let enteredAnswer = e.currentTarget.textContent

        setTestResult((prev) => {
            const result = cloneDeep(prev)
            result[currentTaskId] = enteredAnswer === tasks[currentTaskId].correctAnswer
            if (result[currentTaskId]) {
                props.handleCorrectVariantActionCreator(tasks[currentTaskId].correctAnswer)
            } else {
                props.handleWrongVariantActionCreator(tasks[currentTaskId].correctAnswer)
            }
            return result
        })
    }

    const handleClickNext = () => {
        setCurrentTaskId((prev) => ++prev)
        setPreparedAnswers(null)
        setRussianWord(null)
    }

    if (currentTaskId >= tasks.length) {
        return (
            <TestResultComponent testResult={testResult}
                                 materialId={props.materialIdUrl}
                                 clearGameData={clearGameData}
                                 increaseAttemptCounterActionCreator={props.increaseAttemptCounterActionCreator}
                                 numberAttempt={props.numberAttempt}
            />
        )
    }

    const handlePreparedAnswers = () => {
        if (preparedAnswers === null) {
            setPreparedAnswers(prepareAnswers())
        }
        return preparedAnswers
    }

    const handleRussianWord = () => {
        if (russianWord === null) {
            setRussianWord(tasks[currentTaskId].russianWord)
        }
        return russianWord
    }

    const convertComplexityToSigns = (complexity) => {
        if (complexity > 80) return '*****'
        if (complexity > 60) return '****'
        if (complexity > 40) return '***'
        if (complexity > 20) return '**'
        if (complexity > 0) return '*'
    }

    function createRefToPlayPhrase() {
        const currentWord = tasks[currentTaskId].russianWord
        const beginning = 'https://playphrase.me/#/search?q='
        return beginning + currentWord.replaceAll(' ', '+')
    }

    return (
        <Container maxWidth="lg">
            <NavLink to={"/ELeornio"} style={{textDecoration: 'none'}}>
                <Button style={{backgroundColor: 'green'}}>Home Page</Button>
            </NavLink>
            <div style={{height: '200px',}}></div>
            <div>
                {testResult[currentTaskId] === undefined &&
                    <Alert severity="info">
                        <AlertTitle>PLEASE SELECT VARIANT</AlertTitle>
                        You need to select appropriate variant, also you can click example to view clips with word.
                    </Alert>
                }

                {testResult[currentTaskId] &&
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        You choose right variant — <strong>cool!</strong>
                    </Alert>
                }
                {testResult[currentTaskId] === false &&
                    <Alert severity="warning">
                        <AlertTitle>You choose wrong</AlertTitle>
                        The right answer is [<strong>{tasks[currentTaskId].correctAnswer}</strong>]
                    </Alert>
                }

                <p><LinearProgress variant="determinate" value={(currentTaskId - 1) * 10}/></p>

                <div style={{width: '50%', float: 'left', height: '50%'}}>
                    <ListItemText primary={handleRussianWord()}/>
                    <ListItemText primary={convertComplexityToSigns(tasks[currentTaskId].complexity)}/>

                    <a style={{display: "table-cell", textDecoration: 'none'}}
                       href={createRefToPlayPhrase()}
                       target="_blank"
                       rel="noreferrer" >
                        <Button style={{backgroundColor: 'grey'}}>View example</Button>
                    </a>
                    <h1>{props.score}</h1>
                </div>

                <div style={{width: '50%', float: 'right'}}>
                    {handlePreparedAnswers()}
                    <div style={{margin: 15}}>
                        {testResult[currentTaskId] !== undefined &&
                            <Button onClick={handleClickNext}
                                    style={{backgroundColor: 'green'}}
                                    variant="outlined">Next
                            </Button>}
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default TranslateGameComponent
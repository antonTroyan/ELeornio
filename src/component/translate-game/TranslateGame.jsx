import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';
import cloneDeep from 'lodash/cloneDeep';

const styles = {
    mainContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        'margin-top': '-50px',
        'margin-left': '-50px',
        width: '300px',
        height: '100px'
    }
}

const initialTestResult = {
    1 : undefined,
    2 : undefined,
    3 : undefined,
    4 : undefined,
    5 : undefined,
    6 : undefined,
    7 : undefined,
    8 : undefined,
    9 : undefined,
    10 : undefined
}

const TranslateGame = (props) => {

    const [currentTaskId, setCurrentTaskId] = useState(1)
    const [isAnswerClicked, setIsAnswerClicked] = useState(false)

    const [testResult, setTestResult] = useState(initialTestResult)

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

    const prepareAnswers = () => {
        let isCorrectAnswerAlreadyIn = false

        const result = props.translatePage.tasks.slice(0, 4).map((element) => {
            if (element.correctAnswer === props.translatePage.tasks[currentTaskId].correctAnswer) {
                isCorrectAnswerAlreadyIn = true
            }
            return (
                <Button style={{width: 150}}
                        key={element.correctAnswer}
                        onClick={handleClick}
                        variant="outlined">{element.correctAnswer}</Button>
            )
        })

        const correctAnswer = <Button style={{width: 150}} onClick={handleClick}
                                      variant="outlined">{props.translatePage.tasks[currentTaskId].correctAnswer}</Button>

        if (!isCorrectAnswerAlreadyIn){
            result.push(correctAnswer)
        }

        return shuffle(result)
    }

    const handleClick = (e) => {
        let enteredAnswer = e.currentTarget.textContent
        if (enteredAnswer === props.translatePage.tasks[currentTaskId].correctAnswer) {
            alert("Its true")

            setTestResult((prev) => {
                const result = cloneDeep(prev)
                result[currentTaskId] = true
                return result
            })
        } else {
            alert("Its not true")

            setTestResult((prev) => {
                const result = cloneDeep(prev)
                result[currentTaskId] = true
                return result
            })
        }

    }

    const handleClickNext = () => {
        setCurrentTaskId((prev) => ++prev)
    }

    return (
        <div>
            <div style={styles.mainContainer}>
                <div style={{width: '50%', float: 'left'}}>
                    {props.translatePage.tasks[currentTaskId].russianWord}
                </div>
                <div style={{width: '50%', float: 'right'}}>
                    {prepareAnswers()}

                    <div style={{margin: 100}}>
                        {testResult[currentTaskId] !== undefined &&  <Button onClick={handleClickNext} style={{backgroundColor: 'green'}}
                                                     variant="outlined">Next</Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TranslateGame
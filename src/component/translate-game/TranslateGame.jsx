import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';

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

const TranslateGame = (props) => {

    const [currentTaskId, setCurrentTaskId] = useState(1)

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
                <Button key={element.correctAnswer}
                        onClick={handleClick}
                        variant="outlined">{element.correctAnswer}</Button>
            )
        })

        const correctAnswer = <Button onClick={handleClick}
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
        } else {
            alert("Its not true")
        }
    }

    return (
        <div>
            <div style={styles.mainContainer}>
                <div style={{width: '50%', float: 'left'}}>
                    {props.translatePage.tasks[currentTaskId].russianWord}
                </div>
                <div style={{width: '50%', float: 'right'}}>
                    {prepareAnswers()}
                </div>
            </div>
        </div>
    )
}

export default TranslateGame
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

const props = {
    russianWord: 'Привет мир',
    incorrectAnswers: ['Hello cat', 'Good World', 'Cool World'],
    correctAnswer: 'Hello world'
}


const TranslateGame = () => {

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
        const result = props.incorrectAnswers.map((element) => {
            return (
                <Button key={element}
                        onClick={handleClick}
                        variant="outlined">{element}</Button>
            )
        })
        result.push(<Button onClick={handleClick}
                            variant="outlined">{props.correctAnswer}</Button>)
        return shuffle(result)
    }

    const handleClick = (e) => {
        let enteredAnswer = e.currentTarget.textContent
        if (enteredAnswer === props.correctAnswer) {
            alert("Its true")
        } else {
            alert("Its not true")
        }
    }

    return (
        <div>
            <div style={styles.mainContainer}>
                <div style={{width: '50%', float: 'left'}}>
                    {props.russianWord}
                </div>
                <div style={{width: '50%', float: 'right'}}>
                    {prepareAnswers()}
                </div>
            </div>
        </div>
    )
}

export default TranslateGame
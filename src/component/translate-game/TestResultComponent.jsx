import React from 'react';
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import VerticalLinearStepperComponent from "./VerticalLinearStepperComponent";

const styles = {
    mainContainer: {
        position: 'absolute',
        top: '40%',
        left: '30%',
        'margin-top': '-50px',
        'margin-left': '-50px',
        width: '700px',
        height: '100px'
    }
}

const TestResultComponent = (props) => {

    const getElements = () => {
        const testResult = props.testResult
        const result = {
            success: 0,
            failed: 0,
            all: 0
        }
        for (let i = 1; i <= 10; i++) {
            if (testResult[i] === true) {
                result.success = result.success + 1
            }
            if (testResult[i] === false) {
                result.failed = result.failed + 1
            }
        }
        result.all = result.success + result.failed
        return result
    }

    return (
        <div style={styles.mainContainer}>
            <div style={{width: '50%', float: 'left', height: '50%'}}>
                <VerticalLinearStepperComponent numberAttempt={props.numberAttempt}
                                                increaseAttemptCounterActionCreator={props.increaseAttemptCounterActionCreator}/>
            </div>
            <div style={{width: '50%', float: 'right', height: '50%'}}>
                <h2>Your have {getElements().success} / {getElements().all} points</h2>
                <NavLink to={"/game/" + props.materialId}>
                <Button style={{backgroundColor: 'green'}}
                    onClick={() => {
                        props.clearGameData()
                    }}>Try Again</Button>
                </NavLink>
            </div>
        </div>
    )
}


export default TestResultComponent
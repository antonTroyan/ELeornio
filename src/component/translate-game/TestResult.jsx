import React from 'react';

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

const TestResult = (props) => {

    const getElements = () => {
        const testResult = props.testResult
        const result = {
            success: 0,
            failed: 0,
            all: 0
        }

        for (let i = 1; i < 10; i++){
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
            <h2>Your have {getElements().success} / {getElements().all} points</h2>
        </div>
    )
}

export default TestResult
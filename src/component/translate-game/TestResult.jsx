import React from 'react';

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
        <div>
            Your have {getElements().success} / {getElements().all} points
        </div>
    )
}

export default TestResult
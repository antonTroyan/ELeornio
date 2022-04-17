import React, {useEffect} from 'react';
import TranslateGameComponent from "./TranslateGameComponent";


const TranslateGameInitializer = (props) => {

    if (props.isInitialized === false) {
        props.initializeComplexityActionCreator()
        return "Downloading"

    } else {

        return (
            <TranslateGameComponent materialIdUrl={props.match.params.materialId}
                                    materials={props.materials}
                                    numberAttempt={props.numberAttempt}
                                    increaseAttemptCounterActionCreator={props.increaseAttemptCounterActionCreator}
                                    score={props.score}
                                    handleCorrectVariantActionCreator={props.handleCorrectVariantActionCreator}
                                    handleWrongVariantActionCreator={props.handleWrongVariantActionCreator}
            />
        )
    }
}

export default TranslateGameInitializer
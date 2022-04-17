import {connect} from "react-redux";

import {compose} from 'redux';
import {withRouter} from "react-router-dom";
import {
    handleCorrectVariantActionCreator,
    handleWrongVariantActionCreator,
    initializeComplexityActionCreator
} from '../../redux/main-page-reducer';
import {
    increaseAttemptCounterActionCreator
} from '../../redux/result-reducer';
import TranslateGameInitializer from "./TranslateGameInitializer";

const mapStateToProps = (state) => {
    return {
        materials: state.mainPageReducer.materials,
        score: state.mainPageReducer.score,
        numberAttempt: state.resultReducer.numberAttempt,
        isInitialized: state.mainPageReducer.isInitialized
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleWrongVariantActionCreator: (key) => dispatch(handleWrongVariantActionCreator(key)),
        handleCorrectVariantActionCreator: (key) => dispatch(handleCorrectVariantActionCreator(key)),
        increaseAttemptCounterActionCreator: () => dispatch(increaseAttemptCounterActionCreator()),
        initializeComplexityActionCreator: () => dispatch(initializeComplexityActionCreator())
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
(TranslateGameInitializer)
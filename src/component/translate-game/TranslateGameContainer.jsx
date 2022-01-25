import {connect} from "react-redux";
import TranslateGameComponent from "./TranslateGameComponent";
import {compose} from 'redux';
import {withRouter} from "react-router-dom";
import {
    handleCorrectVariantActionCreator,
    handleWrongVariantActionCreator,
} from '../../redux/main-page-reducer';
import {
    increaseAttemptCounterActionCreator
} from '../../redux/result-reducer';



const mapStateToProps = (state) => {
    return {
        materials: state.mainPageReducer.materials,
        score: state.mainPageReducer.score,
        numberAttempt: state.resultReducer.numberAttempt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleWrongVariantActionCreator: (key) => dispatch(handleWrongVariantActionCreator(key)),
        handleCorrectVariantActionCreator: (key) => dispatch(handleCorrectVariantActionCreator(key)),
        increaseAttemptCounterActionCreator: () => dispatch(increaseAttemptCounterActionCreator())
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
(TranslateGameComponent)
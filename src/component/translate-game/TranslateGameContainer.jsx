import {connect} from "react-redux";
import TranslateGameComponent from "./TranslateGameComponent";
import {compose} from 'redux';
import {withRouter} from "react-router-dom";
import {
    incrementScoreActionCreator,
    resetScoreActionCreator,
    increaseComplexityActionCreator,
    decreaseComplexityActionCreator
} from '../../redux/main-page-reducer';

const mapStateToProps = (state) => {
    return {
        materials: state.mainPageReducer.materials,
        score: state.mainPageReducer.score
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementScoreActionCreator: () => dispatch(incrementScoreActionCreator()),
        resetScoreActionCreator: () => dispatch(resetScoreActionCreator()),
        increaseComplexityActionCreator: (key) => dispatch(increaseComplexityActionCreator(key)),
        decreaseComplexityActionCreator: (key) => dispatch(decreaseComplexityActionCreator(key))
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
(TranslateGameComponent)
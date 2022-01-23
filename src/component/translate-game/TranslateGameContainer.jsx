import {connect} from "react-redux";
import TranslateGameComponent from "./TranslateGameComponent";
import {compose} from 'redux';
import {withRouter} from "react-router-dom";
import {
    handleCorrectVariantActionCreator,
    handleWrongVariantActionCreator,
} from '../../redux/main-page-reducer';

const mapStateToProps = (state) => {
    return {
        materials: state.mainPageReducer.materials,
        score: state.mainPageReducer.score
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleWrongVariantActionCreator: (key) => dispatch(handleWrongVariantActionCreator(key)),
        handleCorrectVariantActionCreator: (key) => dispatch(handleCorrectVariantActionCreator(key))
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter)
(TranslateGameComponent)
import {connect} from "react-redux";
import TranslateGameComponent from "./TranslateGameComponent";
import {compose} from 'redux';
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        materials : state.mainPageReducer.materials
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withRouter)
(TranslateGameComponent)
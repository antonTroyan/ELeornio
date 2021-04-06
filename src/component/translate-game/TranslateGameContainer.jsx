import {connect} from "react-redux";
import TranslateGame from "./TranslateGame";
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
(TranslateGame)
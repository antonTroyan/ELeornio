import {connect} from "react-redux";
import TranslateGame from "./TranslateGame";
import takeRandomElementsFromArray from "../../util/util";
import {compose} from 'redux';
import {withRouter} from "react-router-dom";

const correctTaskSelector = (state) => {

    return takeRandomElementsFromArray(10, state.mainPageReducer.materials[0].tasks)
}

const mapStateToProps = (state) => {
    return {
        tasks : correctTaskSelector(state)
    }
}

export default compose(
    connect(mapStateToProps, {}),
    withRouter)
(TranslateGame)
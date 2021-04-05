import {connect} from "react-redux";
import TranslateGame from "./TranslateGame";
import takeRandomElementsFromArray from "../../util/util";

const correctTaskSelector = (state) => {

    return takeRandomElementsFromArray(10, state.translateGameReducer.tasks)
}

const mapStateToProps = (state) => {
    return {
        tasks : correctTaskSelector(state)
    }
}

export default connect(mapStateToProps, {})(TranslateGame)
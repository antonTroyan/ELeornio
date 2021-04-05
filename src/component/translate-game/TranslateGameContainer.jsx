import {connect} from "react-redux";
import TranslateGame from "./TranslateGame";

const mapStateToProps = (state) => {
    return {
        translatePage : state.translateGameReducer
    }
}

export default connect(mapStateToProps, {})(TranslateGame)
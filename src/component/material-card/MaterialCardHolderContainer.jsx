import {connect} from 'react-redux';
import MaterialCardHolder from "./MaterialCardHolder";

const mapStateToProps = (state) => {
    return {
        materialPage: state.mainPageReducer
    }
}

export default connect(mapStateToProps, {})(MaterialCardHolder)
import React from "react";
import {connect} from 'react-redux';
import MaterialCardHolder from "./MaterialCardHolder";


const mapStateToProps = (state) => {
    debugger
    return {
        materialPage : state.mainPageReducer
    }
}

export default connect(mapStateToProps, {})(MaterialCardHolder)
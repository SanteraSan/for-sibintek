import React from 'react';
import {connect} from "react-redux";
import Jobs from "./Jobs";
import {addNewJob} from "../../../redux/reducers/jobReducer";

let mapStateToProps = (state) =>{
    return{
        job:state.jobReducer.jobs
    }
};

const JobsContainer = connect(mapStateToProps,{addNewJob})(Jobs);

export default JobsContainer;
import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Jobs from "./Jobs";
import {addNewJob} from "../../../redux/reducers/jobReducer";
import getJobs from "../../../Common/async/async";



let mapStateToProps = (state) =>{
    return{
        job:state.jobReducer.jobs,
        getJobs
    }
};

const JobsContainer = connect(mapStateToProps,{addNewJob})(Jobs);

export default JobsContainer;
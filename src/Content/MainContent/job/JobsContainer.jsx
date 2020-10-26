import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Jobs from "./Jobs";
import {addNewJob, deleteJobs, getAllJobs} from "../../../redux/reducers/jobReducer";

const JobsContainer = (props) => {
    // debugger

    useEffect(() =>{
        props.getAllJobs()}
    , []);

        return (
            <Jobs job={props.job} add={props.addNewJob} deleteJobs={props.deleteJobs}
                  />
        )
    }

    let mapStateToProps = (state) => {
        return {
            job: state.jobReducer.jobs
        }
    };

    export default connect(mapStateToProps, {addNewJob,deleteJobs,getAllJobs})(JobsContainer);


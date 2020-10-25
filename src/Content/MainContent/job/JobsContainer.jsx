import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Jobs from "./Jobs";
import {addNewCounter, addNewJob} from "../../../redux/reducers/jobReducer";
import getJobs from "../../../Common/async/async";
import RenderJobsElement from "./RenderJobsElements";

const JobsContainer = (props) => {
    // debugger
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        props.getJobs().then(response => {
            setJobs(response)})
    }, [props]);

        // let jobElements = jobs.concat(props.job).map((j, i) =>
        //     <RenderJobsElement
        //         key={i}
        //         organisation={j.organisation}
        //         position={j.position}
        //         functions={j.functions}/>
        // )
    // let newJobElements = props.job.map((j, i) =>
    //     <RenderJobsElement
    //         key={i}
    //         organisation={j.organisation}
    //         position={j.position}
    //         functions={j.functions}/>
    // )

        return (
            <Jobs /*jobElements={jobElements}*/ jobs={jobs} job={props.job} add={props.addNewJob} counter={props.counter}
                  />
        )
    }

    let mapStateToProps = (state) => {
        return {
            job: state.jobReducer.jobs,
            getJobs,
            counter:state.jobReducer.counter
        }
    };

    export default connect(mapStateToProps, {addNewJob,addNewCounter})(JobsContainer);


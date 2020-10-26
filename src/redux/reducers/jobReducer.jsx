import getJobs from "../../Common/async/async";

const ADD_JOB = 'ADD_JOB';
const DELETE_JOBS = 'DELETE_JOBS';

let initialState = {
    jobs: []
};

const jobReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_JOB:
            return{
            ...state,
            jobs:state.jobs.concat(action.newJob)
        };
        case DELETE_JOBS:
            return {
            ...state,
            jobs:action.newJobsLength
        }
        default:
            return state;
    }

};

export const addNewJob = (newJob) => ({type:ADD_JOB,newJob});
export const deleteJobs = (newJobsLength) => ({type:DELETE_JOBS,newJobsLength});

export const getAllJobs = () => {
    return (dispatch) =>{
    debugger
    getJobs().then(data =>{
        dispatch(addNewJob(data));
    })
}}

export default jobReducer
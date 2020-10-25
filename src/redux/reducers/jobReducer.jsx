const ADD_JOB = 'ADD_JOB';
const ADD_NEW_COUNTER = 'ADD_NEW_COUNTER';

let initialState = {
    jobs: [],
    counter:1
};

const jobReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_JOB:
            let newJob = {
                organisation:action.newOrganisation,
                position:action.newPosition,
                functions:action.newFunctions
            }
            return{
            ...state,
            jobs:state.jobs.concat(newJob)
        };
        case ADD_NEW_COUNTER:return {
            ...state,
            counter: action.newCounter
        }
        default:
            return state;
    }

};

export const addNewJob = (newOrganisation,newPosition,newFunctions) => ({type:ADD_JOB,newOrganisation,newPosition,newFunctions});
export const addNewCounter = (newCounter) => ({type:ADD_NEW_COUNTER,newCounter});

export default jobReducer
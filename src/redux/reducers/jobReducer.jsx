const ADD_JOB = 'ADD_JOB';

let initialState = {
    jobs: [
        {
            organisation:"",
            position:"",
            functions:""
        }
    ]
};

const jobReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_JOB:return{
            ...state,
            organisation:action.newOrganisation,
            position:action.newPosition,
            functions:action.newFunctions
        };
        default:
            return state;
    }

};

export const addNewJob = (newOrganisation,newPosition,newFunctions) => ({type:ADD_JOB,newOrganisation,newPosition,newFunctions});

export default jobReducer
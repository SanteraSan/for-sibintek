const ADD_JOB = 'ADD_JOB';

let initialState = {
    jobs: [
        {
            organisation:"ООО ТехСтройСнаб",
            position:"Инженер систем безопасности.",
            functions:"Руководитель отдела. Обеспечение системами безопасности строительных объектов." +
                " IP-видеонаблюдение, Автоматизация учета ГСМ, интернет и телефония."
        },
        {
            organisation:"ООО Лидер Поиска",
            position:"Программист",
            functions:"Разработка и создание сайтов. Подключение CMS. Поддержка действующих проектов."
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
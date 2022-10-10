import uuid from "react-uuid";
 

export const actionType = {
    ADD_DEVELOPER: 'ADD_DEVELOPER',
    DELETE_DEVELOPER: 'DELETE_DEVELOPER'
}

export const developer = (state, action) => {
    switch (action.type) {
        case actionType.ADD_DEVELOPER:
            return [...state, {
                name: action.payload.name,
                favProgLanguage: action.payload.favProgLanguage,
                listOfTechnologies: action.payload.listOfTechnologies,
                favFood: action.payload.favFood,
                favDrink: action.payload.favDrink,
                id: uuid()
            }]

        case actionType.DELETE_DEVELOPER:
            return state.filter((developer) => developer.id !== action.payload)

        default:
            return state;
    }
    console.log(action)
};
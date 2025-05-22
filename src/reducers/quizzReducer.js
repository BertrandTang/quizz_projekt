import { quizzData } from '../assets/data/QuizzData';

export function quizzReducer(state = quizzData, action) {
    switch (action.type) {
        case "validate":
            return state.map(question =>
                question.id === action.id
                    ? { ...question, validation: action.value }
                    : question
            );
        case "reset":
            return state.map(question =>
                question.id === action.id
                    ? { ...question, validation: null }
                    : question
            );
        default:
            return state;
    }
}
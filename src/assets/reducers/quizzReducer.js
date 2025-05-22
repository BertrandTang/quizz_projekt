import { quizzData } from '../data/QuizzData';

export function quizzReducer(state = quizzData, action) {
    // Selon le action.type, on renvoie un array de l'objet question modifié
    switch (action.type) {
        case "right":
            return state.map(question =>
                question.id === action.id ? {
                    id: question.id,
                    category: question.category,
                    question: question.question,
                    answer: question.answer,
                    validation: true
                } : question
            );
        case "wrong":
            return state.map(question =>
                question.id === action.id ? {
                    id: question.id,
                    category: question.category,
                    question: question.question,
                    answer: question.answer,
                    validation: false
                } : question
            );
        case "reset":
            return state.map(question =>
                question.id === action.id ? {
                    id: question.id,
                    category: question.category,
                    question: question.question,
                    answer: question.answer,
                    validation: null
                } : question
            );
        default:
            return state;
    }
}
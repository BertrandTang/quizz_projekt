import { createContext, useReducer } from "react";
import { quizzReducer } from "../reducers/quizzReducer";
import { quizzData } from "../data/QuizzData";

// eslint-disable-next-line react-refresh/only-export-components
export const QuizzContext = createContext();

export function QuizzProvider({ children }) {
    // stateQuizzData est initialisé avec quizzData (provenant de QuizzData.js)
    // dispatch modifie l'état via le reducer et est transmis via le provider
    const [stateQuizzData, dispatch] = useReducer(quizzReducer, quizzData);

    return (
        <QuizzContext.Provider value={{ stateQuizzData, dispatch }}>
            {children}
        </QuizzContext.Provider>
    );
}
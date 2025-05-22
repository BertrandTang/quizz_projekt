import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';
import QuestionItem from './QuestionItem';
import { useContext } from "react";
import { QuizzContext } from "../contexts/QuizzContext";

export default function QuizzAccordion({ category }) {
    const { stateQuizzData, dispatch } = useContext(QuizzContext);

    // Si filteredQuestions est category = 0, on affiche tous les résultats
    // Sinon, on affiche les questions filtrées par la categorie
    const filteredQuestions = category === "0"
        ? stateQuizzData
        : stateQuizzData.filter(question => question.category === category);

    return (
        <Accordion defaultActiveKey="0">
            {filteredQuestions.map((question, index) => (
                <QuestionItem
                    key={index}
                    question={question}
                    dispatch={dispatch}
                    eventKey={index}
                />
            ))}
        </Accordion>
    );
}
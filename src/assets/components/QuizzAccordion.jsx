import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Accordion from 'react-bootstrap/Accordion';
import QuestionItem from './QuestionItem';
import { quizzData } from "../data/QuizzData";
import { useContext } from "react";
import { QuizzContext } from "../contexts/QuizzContext";

export default function QuizzAccordion({ category }) {
    const { stateQuizzData, dispatch } = useContext(QuizzContext);

    // Si filteredQuestions est category = 0, on affiche tous les résultats
    // Sinon, on affiche les questions filtrées par la categorie
    const filteredQuestions = category === "0"
        ? stateQuizzData
        : quizzData.filter(question => question.category === category);

    return (
        <Accordion defaultActiveKey="0">
            {filteredQuestions.map((question, index) => (
                <Accordion.Item key={index} eventKey={index}>
                    <Accordion.Header>
                        <QuestionItem question={question} type='question' />
                        {question.validation === true && (
                            <Badge bg="success" className="ms-2">Vrai</Badge>
                        )}
                        {question.validation === false && (
                            <Badge bg="danger" className="ms-2">Faux</Badge>
                        )}
                    </Accordion.Header>
                    <Accordion.Body>
                        <QuestionItem question={question} type='answer' />
                        <Stack direction="horizontal" gap={3} className="align-items-center">
                            <Button
                                variant="success"
                                // On vérifie que validation bien null
                                disabled={question.validation !== null}
                                // On utilise le reducer pour effectuer l'action "right"
                                // On envoie au reducer le type d'action et l'id de la question
                                // Dans le reducer, on vérifie que l'action.id correspond à la question.id
                                onClick={() => dispatch({ type: "right", id: question.id })}
                            >
                                Vrai
                            </Button>
                            <Button
                                variant="danger"
                                disabled={question.validation !== null}
                                onClick={() => dispatch({ type: "wrong", id: question.id })}
                            >
                                Faux
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => dispatch({ type: "reset", id: question.id })}
                            >
                                Réinitialiser
                            </Button>
                        </Stack>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    );
}
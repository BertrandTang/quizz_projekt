import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

export default function QuestionItem({ question, dispatch, eventKey }) {
    return (
        <Accordion.Item eventKey={eventKey}>
            <Accordion.Header>
                {question.question}
                {question.validation !== null && (
                    <Badge
                        bg={question.validation ? "success" : "danger"}
                        className="ms-2"
                    >
                        {question.validation ? "Vrai" : "Faux"}
                    </Badge>
                )}
            </Accordion.Header>
            <Accordion.Body>
                {question.answer}
                <Stack direction="horizontal" gap={3} className="align-items-center">
                    <Button
                        variant="success"
                        disabled={question.validation !== null}
                        onClick={() => dispatch({ type: "validate", id: question.id, value: true })}
                    >
                        Vrai
                    </Button>
                    <Button
                        variant="danger"
                        disabled={question.validation !== null}
                        onClick={() => dispatch({ type: "validate", id: question.id, value: false })}
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
    );
}
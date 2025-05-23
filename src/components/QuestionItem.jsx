import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

export default function QuestionItem({ question, dispatch, eventKey }) {
    return (
        <Accordion.Item eventKey={eventKey}>
               <Accordion.Header>
                <div className="d-flex justify-content-between align-items-center w-100">
                    <span>{question.question}</span>
                    {question.validation !== null && (
                        <Badge
                            bg={question.validation ? "success" : "danger"}
                            className="ms-2"
                        >
                            {question.validation ? "Juste" : "Fausse"}
                        </Badge>
                    )}
                </div>
            </Accordion.Header>
            <Accordion.Body>
                <Card>
                    <Card.Body>
                        Réponse <br />
                        {question.answer}
                    </Card.Body>
                </Card>

                <Stack direction="horizontal" gap={3} className="align-items-center">
                    <Button
                        variant="success"
                        disabled={question.validation !== null}
                        onClick={() => dispatch({ type: "validate", id: question.id, value: true })}
                    >
                        Juste
                    </Button>
                    <Button
                        variant="danger"
                        disabled={question.validation !== null}
                        onClick={() => dispatch({ type: "validate", id: question.id, value: false })}
                    >
                        Fausse
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
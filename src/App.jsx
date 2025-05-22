import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import FilterQuiz from './components/FilterQuizz'
import QuizzAccordion from './components/QuizzAccordion';
import Container from 'react-bootstrap/Container';

export default function App() {
    const [category, setCategory] = useState("0");

    return (
        <Container as="main">
            <h1>Quizz-O-matic</h1>
            <FilterQuiz category={category} onCategoryChange={setCategory} />
            <QuizzAccordion category={category} />
        </Container>
    );
}
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import FilterQuiz from './components/FilterQuizz'
import QuizzAccordion from './components/QuizzAccordion';
import Container from 'react-bootstrap/Container';
import Header from './components/Header'

export default function App() {
    const [category, setCategory] = useState("0");

    return (
        <>
            <Header />
            <Container as="main">
                <FilterQuiz category={category} onCategoryChange={setCategory} />
                <QuizzAccordion category={category} />
            </Container>
        </>
    );
}
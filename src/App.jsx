import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/app.scss'
import { useState } from 'react';
import FilterQuiz from './assets/components/FilterQuizz';
import QuizzAccordion from './assets/components/QuizzAccordion';

export default function App() {
    const [category, setCategory] = useState("0");

    return (
        <>
            <h1>Quizz-O-matic</h1>
            <FilterQuiz category={category} onCategoryChange={setCategory} />
            <QuizzAccordion category={category} />
        </>
    );
}
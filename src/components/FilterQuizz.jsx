import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { QuizzContext } from '../contexts/QuizzContext';

export default function FilterQuiz({ category, onCategoryChange }) {
    const { stateQuizzData } = useContext(QuizzContext);

    // On utilise map pour récupérer toutes les catégories des questions
    // puis Set pour éliminer les doublons (Set ne garde que les valeurs uniques). Set renvoie un objet. 
    // Enfin, le spread operator [...] transforme le Set en un tableau utilisable dans le composant
    const categories = [...new Set(stateQuizzData.map(question => question.category))];

    return (
        <Form.Select
        aria-label="Category select"
        value={category}
        // On envoie category à App.jsx via l'écouteur d'évènement onCategoryChange 
            onChange={event => onCategoryChange(event.target.value)}
        >
            <option value="0">Toutes les catégories</option>
            {categories.map((cat, index) =>
                <option key={index} value={cat}>{cat}</option>
            )}
        </Form.Select>
    );
}
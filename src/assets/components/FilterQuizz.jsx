import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { QuizzContext } from '../contexts/QuizzContext';

export default function FilterQuiz({ category, onCategoryChange }) {
    const { stateQuizzData } = useContext(QuizzContext);

    // Ici on extrait les categories dans un array categories pour les manipuler plus facilement
    let categories = [];

    for (let index = 0; index < stateQuizzData.length; index++) {
        const cat = stateQuizzData[index].category;
        // On vérifie également qu'on récupère qu'une fois chaque catégorie 
        // pour prévenir du cas où on aurait plusieurs questions de la même catégorie
        if (!categories.includes(cat)) {
            categories.push(cat);
        }
    }
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
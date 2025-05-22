
// Ce composant affiche soit la question, soit la réponse selon la valeur de 'type' reçue de QuizzAccordion
//  Voir QuizzAccordion pour comprendre à quoi servent les ifs
export default function QuestionItem({ question, type }) {
    if (type === "question") {
        return <span>{question.question}</span>;
    }
    if (type === "answer") {
        return (
            <span>
                <strong>Réponse :</strong> {question.answer}
            </span>
        );
    }
    return null;
}
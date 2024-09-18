import { useState } from "react";
import "./styles.css";
const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];
export default function App() {
  return (
    <div>
      <FlashCards />
    </div>
  );
}
function FlashCards() {
  const [selectedId, setSelectedid] = useState(null);
  function handleEvent(id) {
    setSelectedid(id);
    if (id === selectedId) setSelectedid(null);
  }
  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          onClick={() => {
            handleEvent(q.id);
          }}
          key={q.id}
          className={q.id === selectedId ? "selected" : ""}
        >
          <p>{q.id === selectedId ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}

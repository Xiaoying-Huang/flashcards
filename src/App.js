import { useState } from "react";
import "./styles.css";

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript"
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components"
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX"
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props"
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook"
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element"
  }
];

export default function App() {
  const [selected, setSelected] = useState(null);
  function handleClick(id) {
    if (id !== selected) {
      setSelected((currentSelected) => id);
    } else {
      setSelected(null);
    }
  }
  return (
    <div className="App">
      <div className="flashcards">
        {questions.map(q => <FlashCards questionObj={q} key={q.id} selectedId={selected} onClick={() => handleClick(q.id)} />)}
      </div>
    </div>
  );
}

function FlashCards(props) {
  return (<>
    <div
      className={props.selectedId === props.questionObj.id ? "selected" : ""} onClick={props.onClick}>
      {
        props.selectedId === props.questionObj.id
          ? `${props.questionObj.answer}`
          : `${props.questionObj.question}`
      }
    </div>
  </>);
}

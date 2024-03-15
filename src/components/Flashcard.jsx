import React, { useState } from "react";

function Flashcard(props) {
  const [flipped, setFlipped] = useState(false);

  const flipCard = () => {
    setFlipped(!flipped);
  };

  const { question, answer, mode } = props.card; 

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''} ${mode}`}>
      <div className="flip-card" onClick={flipCard}>
        <div className="front">
          <h2>{question}</h2> {}
        </div>
        <div className="back">
          <h2>{answer}</h2> {}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;

import React, { useState } from 'react';
import './App.css';
import Flashcard from './components/Flashcard';

function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [userGuess, setUserGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const cards = [
    { question: 'Greet someone by saying "Hello!" 👋', answer: 'Ciao', mode: 'easy' },
    { question: 'How do you say "Thank you"?', answer: 'Grazie', mode: 'easy' },
    { question: 'What is the word for "food" 🍕 ?', answer: 'Cibo', mode: 'medium' },
    { question: 'Word for soccer ⚽?', answer: 'Calcio', mode: 'medium' },
    { question: 'Phrase: "Lets go eat!" 🍽️?', answer: 'Andiamo a mangiare', mode: 'hard' },
    { question: 'Please', answer: 'Per favore', mode: 'medium' },
    { question: 'Tomato 🍅', answer: 'Pomodoro', mode: 'easy' },
    { question: 'Red car 🚗', answer: 'Macchina rossa', mode: 'hard' },
  ];

  const handleClickBack = () => {
    const prevCard = (currentCard - 1 + cards.length) % cards.length;
    setCurrentCard(prevCard);
    setUserGuess('');
    setIsCorrect(null);
  };

  const handleClickNext = () => {
    const nextCard = (currentCard + 1) % cards.length;
    setCurrentCard(nextCard);
    setUserGuess('');
    setIsCorrect(null);
  };

  const handleInputChange = (event) => {
    setUserGuess(event.target.value);
  };

  const handleSubmit = () => {
    const correctAnswer = cards[currentCard].answer;
    if (userGuess.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className='App'>
      <div className='intro'>
        <h1>🇮🇹 Learn Italian 🇮🇹</h1>
        <h2>Italian for Beginners 101</h2>
        <p>Number of cards: {cards.length} </p>
      </div>

      <div className="flashcard-container">
        <Flashcard card={cards[currentCard]} />
        <input
          className="user-input"
          type="text"
          placeholder="Enter your guess"
          value={userGuess}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit} className="submit-button" >Submit</button>
        {isCorrect !== null && (
          <p style={{ color: isCorrect ? 'lime' : 'crimson', fontSize: '20px' }}>
            {isCorrect ? 'Correct ✔' : 'Incorrect ✘'}
          </p>
        )}
      </div>

      <button className="back-button" onClick={handleClickBack}>⬅</button>
      <button className="next-button" onClick={handleClickNext}>➡</button>

    </div>
  );
}

export default App;

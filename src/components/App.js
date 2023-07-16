import React, { useState } from 'react';
import Card from './Card';
import Level from './Level';
import Score from './Score';
import GameStart from './GameStart';
import Instructions from './Instructions';

const App = () => {
    
    const [gameStart, setGameStart] = useState(false);
    const [cardsRemaining, setCardsRemaining] = useState([]);
    const [cardsSelected, setCardsSelected] = useState([]);
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);

    return (
        <div>
            <h1>Memory Game</h1>
            <GameStart 
                gameStart={gameStart}
                setGameStart={setGameStart}
            />
            <Level
                level={level}
                gameStart={gameStart}
            />
            <Score 
                score={score}
                setScore={setScore}
                gameStart={gameStart}
            />
            <Card 
                cardsRemaining={cardsRemaining}
                setCardsRemaining={setCardsRemaining}
                cardsSelected={cardsSelected}
                setCardsSelected={setCardsSelected}
                gameStart={gameStart}
                level={level}
                setLevel={setLevel}
                score={score}
                setScore={setScore}
            />
            <Instructions />
        </div>
    )
}

export default App;
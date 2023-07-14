import React, { useState } from 'react';
import Card from './Card';
import Level from './Level';
import Score from './Score';
import GameStart from './GameStart';

const App = () => {
    
    const [gameStart, setGameStart] = useState(false);
    const [cardsRemaining, setCardsRemaining] = useState([]);
    const [cardsSelected, setCardsSelected] = useState([]);
    const [level, setLevel] = useState(1);

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
                gameStart={gameStart}
            />
            <Card 
                cardsRemaining={cardsRemaining}
                setCardsRemaining={setCardsRemaining}
                gameStart={gameStart}
                level={level}
            />
        </div>
    )
}

export default App;
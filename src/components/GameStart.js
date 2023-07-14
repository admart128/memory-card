import React from 'react';

const GameStart = ({gameStart, setGameStart}) => {
    //console.log('Rendering GameStart with gameStart:', gameStart);

    const handleButtonClick = () => {
        //console.log('Clicking Game Start button');
        setGameStart(true);
        //console.log('New value of gameStart:', gameStart);
    }

    return (
        <div>
            {gameStart ? <p>Game started!</p> : <p>Ready to start game.</p>}
            <button onClick={handleButtonClick}>Game Start</button>
        </div>
    )
}

export default GameStart;
import React, { useEffect } from 'react';

const Card = ({cardsRemaining, setCardsRemaining, gameStart, level}) => {
    //console.log('Rendering Card with gameStart:', gameStart);

    useEffect( () => {
        //console.log('Running useEffect hook in Card with gameStart:', gameStart);
        if (gameStart) {
            const newCards = [];
            
            for(let i=1; i<=(level + 4); i++) {
                newCards.push(i);
                console.log('New cards after push:', newCards);
            }
        
            setCardsRemaining(newCards);

        }
    }, [gameStart, level]);

    const handleButtonClick = (card) => {
        console.log(`Button ${card} clicked.`);
    }

    return (
        <div>
            {cardsRemaining.map(card =>
                <button key={card} onClick={() => handleButtonClick(card)}>
                    {card}
                </button>
            )}
        </div>
    )

}

export default Card;
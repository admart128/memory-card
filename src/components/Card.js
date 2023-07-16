import React, { useEffect } from 'react';

const Card = ({cardsRemaining, setCardsRemaining, cardsSelected, setCardsSelected, 
gameStart, level, setLevel, score, setScore}) => {

    const shuffleNewArray = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    useEffect( () => {
        //console.log('Running useEffect hook in Card with gameStart:', gameStart);
        if (gameStart) {
            const newCards = [];
            
            for(let i=1; i<=(level + 4); i++) {
                newCards.push(i);
                console.log('New cards after push:', newCards);
            }
        
            setCardsRemaining(shuffleNewArray(newCards));

        }

    }, [gameStart, level]);

    useEffect(() => {
        if (cardsSelected.length === (level + 4)) {
            setLevel(level => level + 1);
            setCardsSelected([]);
        }
    }, [cardsSelected]);
    
    const handleButtonClick = (card) => {
        console.log(`Button ${card} clicked.`);
        if (cardsSelected.includes(card)) { 
            console.log('Card already selected. Game Over!')
        }
        else { 
            console.log(`${card} NOT in cardsSelected`);
            setScore(score => score + 1);
            setCardsSelected([...cardsSelected, card]);
            /*i just want to shuffle cards next*/
            setCardsRemaining(shuffleNewArray(cardsRemaining));
            //setCardsRemaining(cardsRemaining.filter(c => c !== card));
        }
        /* MISTAKE HERE IS CALLING THIS CARDS REMAINING SINCE LOGICALLY, THEY ARE NEVER REMOVED, ONLY SHUFFLED AND
        CHECKED AGAINST CARDS SELECTED ON EACH BUTTON CLICIK....*/
 
         


 
        console.log(`cardsRemaining: ${cardsRemaining}`)
        console.log(`cardsSelected: ${cardsSelected}`)
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







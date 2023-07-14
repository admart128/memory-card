import React, { useState } from 'react';

const Level = ({level, gameStart}) => {
    //console.log('Running useEffect hook in Card with gameStart:', gameStart, 'and level:', level);


    return (
        <div>
            {gameStart ? <p>Level {level}</p> : <p></p>}
        </div>
    )

}

export default Level;
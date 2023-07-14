import React, { useState } from "react";

const Score = ({gameStart}) => {

    const [score] = useState(0);

    return (
        <div>
            {gameStart ? <p>Score {score}</p> : <p></p>}
        </div>
    )

}

export default Score;
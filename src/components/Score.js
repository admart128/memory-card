import React, { useState } from "react";

const Score = ({score, gameStart}) => {

    return (
        <div>
            {gameStart ? <p>Score {score}</p> : <p></p>}
        </div>
    )

}

export default Score;
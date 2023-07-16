import React, { useState } from "react";

function Instructions() {

    const [showInstructions, setShowInstructions] = useState(false);

    return(
        <div>
            <button onClick={() => setShowInstructions(!showInstructions)}>
                {showInstructions==false ? "Show Instructions" : "Hide Instructions"}</button>
            {showInstructions ? <p>
            Choose each card just once.
            Choose all cards to advance to the next level.
            The game ends when you choose the same card twice in the same level.
            How many cards can you remember?
            </p> : <p></p>}
        </div>
    )
}

export default Instructions;
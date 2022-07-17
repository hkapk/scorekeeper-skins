import React from "react";

function Player({ name, index, removePlayer }) {
    const removeHandle = i => {
        removePlayer(i);
    }

    return (

        <div className='player-item'>
            <button className='remove-item' onClick={() => removeHandle(index)
            }> X </button>
            <div className="player-item">Player: {name.playerName} </div>
        </div>
    )
}

export default Player;
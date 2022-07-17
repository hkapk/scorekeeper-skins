import React from "react";

function Player({ player, index, removePlayer }) {
    const removeHandle = i => {
        removePlayer(i);
    }

    return
    <div className='player-item'>
        <button className='remove-item' onClick={() => removeHandle(index)
        }> X </button>
        <div className="score-item">Player: {player.player}</div>
    </div>
}

export default Player;
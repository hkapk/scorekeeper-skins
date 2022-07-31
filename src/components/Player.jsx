import React from "react";

function Player({ name, index, removePlayer }) {
    const removeHandle = i => {
        removePlayer(i);
    }


    return (
        <li className='player-item'>
            <div className="player-item"><button className='remove-item' onClick={() => removeHandle(index)
            }> X </button>
                {name.playerName} </div>
        </li>
    )
}

export default Player;
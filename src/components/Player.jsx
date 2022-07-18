import React, { useState } from "react";

function Player({ name, index, removePlayer }) {
    const removeHandle = i => {
        removePlayer(i);
    }

    const [count, setCount] = useState(0);

    const addSkin = () => {
        setCount(count + 1);
    };

    const removeSkin = () => {
        setCount(count - 1);
    };

    return (

        <div className='player-item'>
            <button className='remove-item' onClick={() => removeHandle(index)
            }> X </button>
            <div className="player-item">{name.playerName} </div>
            <button className="remove-item-skin" onClick={() => removeSkin()}>-</button>
            <div className="skin-count">{count}</div>
            <button className="add-item-skin" onClick={() => addSkin()}>+</button>
        </div>
    )
}

export default Player;
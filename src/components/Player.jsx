import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function Player({ name, index, removePlayer }) {
    const removeHandle = i => {
        removePlayer(i);
    }


    return (
        <li className='player-item'>
            <div className=""><button className='remove-item' onClick={() => removeHandle(index)
            }> <FontAwesomeIcon icon={faTrash} /> </button>
                {name.playerName}  </div>
        </li>
    )
}

export default Player;
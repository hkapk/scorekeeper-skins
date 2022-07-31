import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Score({ name, index }) {

    const [holeCount, setHoleCount] = useState(1);
    const [playerSkinCount, setPlayerSkinCount] = useState(0);
    const [skinCount, setSkinCount] = useState(1);

    const pushHole = () => {
        setSkinCount(skinCount + 1);
        setHoleCount(holeCount + 1);
    };

    const reduceHole = () => {
        if (holeCount > 1) {
            setHoleCount(holeCount - 1);
            setSkinCount(skinCount - 1);
            //return player skin count
        };
    }

    const addSkin = () => {
        setPlayerSkinCount(playerSkinCount + skinCount);
        setHoleCount(holeCount + 1);
        setSkinCount(skinCount - skinCount + 1);
    };

    const removeSkin = () => {
        if (playerSkinCount > 0) {
            setPlayerSkinCount(playerSkinCount - 1)
        };
    };


    return (
        <div>
            <h1> Keep Score</h1>
            <button className="previous-hole" onClick={() => reduceHole()}>            <FontAwesomeIcon icon={faArrowLeft} /></button>
            Hole {holeCount}
            <div>
                Skins {skinCount}
            </div>
            <button className="push" onClick={() => pushHole()}>push</button>
            <div className='player-item'>
                <div className="player-item">{name.playerName} </div>
                <button className="remove-item" onClick={() => removeSkin()}>-</button>
                <div className="skin-count">{playerSkinCount}</div>
                <button className="add-item" onClick={() => addSkin()}>Winner</button>
            </div>
        </div>
    )
}

export default Score;
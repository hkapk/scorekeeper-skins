import React, { useState, useContext } from "react";
import { CountContext } from './ScoreList';

function Score({ name, holeCount, skinCount }) {


    const [playerSkinCount, setPlayerSkinCount] = useState(0);
    // let [skinCount, setSkinCount] = useState(1);

    const addSkin = () => {
        setPlayerSkinCount(playerSkinCount + skinCount);

        //setSkinCount(skinCount - skinCount + 1);
        console.log("HC- score", holeCount);
        console.log("SC- score", skinCount);
    };


    return (
        <div className="player-item">
            {name.playerName} {playerSkinCount} <button className='' onClick={() => addSkin()
            }> Winner! </button></div>
    )
}

export default Score;
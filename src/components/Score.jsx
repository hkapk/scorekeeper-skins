import React, { useState, useContext } from "react";
import { CountContext } from './ScoreList';

function Score({ name }) {

    const holeCount = useContext(CountContext);
    const skinCount = useContext(CountContext);
    const [playerSkinCount, setPlayerSkinCount] = useState(0);
    // let [skinCount, setSkinCount] = useState(1);

    const addSkin = () => {
        setPlayerSkinCount(playerSkinCount + skinCount);
        //reset skin count to 1

        //advance holes 1


        console.log("HC- score", holeCount);
        console.log("SC- score", skinCount);
    };


    return (
        <div className="player-item">
            {name.playerName} {playerSkinCount} <button className='add-skin' onClick={() => addSkin()
            }> + </button></div>
    )
}

export default Score;
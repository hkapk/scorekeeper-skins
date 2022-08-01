import React, { useState, useContext } from "react";
import { CountContext, SkinContext } from './ScoreList';

function Score({ name }) {

    // const { holeCount, setHoleCount } = useContext(CountContext);
    const { holeCount, setHoleCount } = useContext(CountContext);
    const { skinCount, setSkinCount } = useContext(SkinContext);
    const [playerSkinCount, setPlayerSkinCount] = useState(0);

    const addSkin = () => {
        setPlayerSkinCount(playerSkinCount + skinCount);
        //reset skin count to 1
        setSkinCount(skinCount - skinCount + 1);
        //advance holes 1
        setHoleCount(holeCount + 1);

        console.log("HC- score", holeCount);
        console.log("SC- score", skinCount);
        console.log("PlayerSkins", playerSkinCount);


    };


    return (
        <div className="player-item">
            {name.playerName}: {playerSkinCount} <button className='add-skin' onClick={() => addSkin()
            }> + </button></div>
    )
}

export default Score;
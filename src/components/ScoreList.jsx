import React, { useState, createContext } from 'react';
import Score from './Score';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function ScoreList({ name }) {

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

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div>
            <h1>Keep Score!</h1>
            <div className=''>
                <button className="previous-hole" onClick={() => reduceHole()}>            <FontAwesomeIcon icon={faArrowLeft} /></button>
                Hole {holeCount}
                <div>
                    Skins {skinCount}
                </div>
                <button className="push" onClick={() => pushHole()}>push</button>
                <li className='player-item'>
                    {
                        name.sort(sortByDate).map((value, index) => (
                            <Score
                                holeCount={holeCount}
                                skinCount={skinCount}
                                key={index}
                                name={value}
                                index={index}
                                addSkin={addSkin} />
                        ))
                    }
                </li>
            </div>
        </div>
    );

}

export default ScoreList;
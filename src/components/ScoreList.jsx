import React, { useState, createContext } from 'react';
import Score from './Score';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const CountContext = createContext(1);
export const SkinContext = createContext(1);

function ScoreList({ name }) {

    const [holeCount, setHoleCount] = useState(1);
    const [skinCount, setSkinCount] = useState(1);

    const pushHole = () => {
        setSkinCount(skinCount + 1);
        setHoleCount(holeCount + 1);

        //console.log("HC- scoreList", holeCount);
        //console.log("SC- scoreList", skinCount);
    };

    const reduceHole = () => {
        if (holeCount > 1) {
            setHoleCount(holeCount - 1);
            setSkinCount(skinCount - 1);
            //return player skin count
        };
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <CountContext.Provider value={{ holeCount, setHoleCount }}>
            <h1>Keep Score!</h1>
            <div><div className='score-title'>
                <button className="previous-hole" onClick={() => reduceHole()}>            <FontAwesomeIcon icon={faArrowLeft} /></button>
                Hole {holeCount}
            </div>
                <SkinContext.Provider value={{ skinCount, setSkinCount }}>
                    <div className='score-title-2'>
                        Skins {skinCount}
                        <button className="push" onClick={() => pushHole()}>    <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                    <li className='player-item'>
                        {
                            name.sort(sortByDate).map((value, index) => (
                                <Score
                                    skinCount={skinCount}
                                    key={index}
                                    name={value}
                                    index={index}
                                />
                            ))
                        }
                    </li>
                </SkinContext.Provider>
            </div>
        </CountContext.Provider >
    );

}

export default ScoreList;
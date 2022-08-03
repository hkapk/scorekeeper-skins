import React, { useState, createContext, useContext } from 'react';
import Score from './Score';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { PageContext } from '../App';

export const CountContext = createContext(1);
export const SkinContext = createContext(1);

function ScoreList({ name }) {

    const [holeCount, setHoleCount] = useState(1);
    const [skinCount, setSkinCount] = useState(1);
    //const { playerSkinCount, setPlayerSkinCount } = useContext(PlayerSkinContext);
    const { isToggled, setIsToggled } = useContext(PageContext);


    const pushHole = () => {
        setSkinCount(skinCount + 1);
        setHoleCount(holeCount + 1);

    };

    const reduceHole = () => {
        if (holeCount === 1) {
            setIsToggled(true)
        }
        if (holeCount > 1 && skinCount > 1) {
            setHoleCount(holeCount - 1);
            setSkinCount(skinCount - 1);
            //return player skin count
            // setPlayerSkinCount(playerSkinCount - 1);
        };
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <CountContext.Provider value={{ holeCount, setHoleCount }}>
            <div><div className='score-title'>
                <button className="previous-hole" onClick={() => reduceHole()}>            <FontAwesomeIcon icon={faArrowLeft} /></button>
                Hole #{holeCount}
            </div>
                <SkinContext.Provider value={{ skinCount, setSkinCount }}>
                    <div className='score-title-2'>
                        <p className='skinCountOne'>Skins Available: </p> <p className="skinCount">{skinCount}</p>
                        <div><button className="push" onClick={() => pushHole()}>
                            Push Hole </button>
                        </div>
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
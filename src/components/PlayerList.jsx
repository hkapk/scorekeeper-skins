import React, { useState } from 'react';
import Player from './Player';

function PlayerList({ name, setName }) {

    const removePlayer = i => {
        let temp = name.filter((v, index) => index !== i);
        setName(temp);
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    const [count, setCount] = useState(1);

    const advanceHole = () => {
        setCount(count + 1);
    };

    const reduceHole = () => {
        setCount(count - 1);
    };

    return (
        <div className="card">
            <button className="" onClick={() => reduceHole()}>-</button>
            <div className="skin-count">Hole {count}</div>
            <button className="" onClick={() => advanceHole()}>+</button>
            <div className='player-list'>
                {
                    name.sort(sortByDate).map((value, index) => (
                        <Player
                            key={index}
                            name={value}
                            index={index}
                            removePlayer={removePlayer} />
                    ))
                }
            </div>
        </div>
    )

}

export default PlayerList;
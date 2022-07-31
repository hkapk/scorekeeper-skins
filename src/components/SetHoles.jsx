import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


function SetHoles() {

    const [holeCount, setCount] = useState(1);




    const reduceHole = () => {
        if (holeCount > 1) {
            setCount(holeCount - 1)
        };
    }

    return (
        <div>
            <h1> Keep Score</h1>
            <div>
                <button className="previous-hole" onClick={() => reduceHole()}>            <FontAwesomeIcon icon={faArrowLeft} /></button>
                Hole {holeCount}
                <div>
                </div>
            </div>

        </div>
    )
};

export default SetHoles;
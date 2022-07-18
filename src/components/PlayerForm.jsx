import React, { useRef } from "react";

function PlayerForm({ name, setName }) {

    const playerName = useRef(null);

    const addPlayer = e => {
        e.preventDefault();

        setName([...name, {
            "playerName": playerName.current.value,
        }]);

        playerName.current.value = null;

    }

    return (
        <form className='player-form' onSubmit={addPlayer}>
            <div className='form-inner'>
                <input type='text' name="playerName" id="playerName"
                    placeholder="Player Name..." ref={playerName} />
                <input type='submit' value='+'></input>
            </div>

        </form>
    );

}

export default PlayerForm;
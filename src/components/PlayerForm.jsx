import React, { useRef } from "react";
import PlayerList from "./PlayerList";

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
            <h1> Add Players </h1>
            <div>
                <input className='submitButton' type='text' name="playerName" id="playerName"
                    placeholder="Player Name..." ref={playerName} />
                <input className='submitButton' type='submit' value='+'></input>
                <div>
                    <PlayerList name={name} setName={setName} />
                </div>
                <div className='submitButton'>
                    <button className='submitButton'> Continue </button>
                </div>
            </div>
        </form>
    );

}

export default PlayerForm;
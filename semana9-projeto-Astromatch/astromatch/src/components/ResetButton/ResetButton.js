import axios from 'axios';
import React from 'react';

function ResetButton () {

    const onClickReset = () => {
        axios.put ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Luciana-Pinero/clear').then (response => {
            console.log (response)
        })
    }

    return(
    <div>  
        <button onClick = {onClickReset}> Resetar Curtidas e Matches </button>
    </div>
    )
    
}

export default ResetButton
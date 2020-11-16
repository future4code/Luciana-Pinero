import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import MatchListItem from './MatchListItem'
import styled, { ListContainer } from './styled'
import axios from 'axios'


function ShowMatchScreen () {
  const [matches, setMatches] = useState ([])

useEffect (() => {
axios.get ("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Luciana-Pinero/matches")
.then (response => { console.log (response)
setMatches (response.data.matches)
})
},[]);

    return(
    <ListContainer>  
        {matches.map((profile) =>{
            return <MatchListItem profile = {profile}/>
        })}

    </ListContainer>
    )
    
}

export default ShowMatchScreen
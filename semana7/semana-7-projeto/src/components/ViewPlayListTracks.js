import React from 'react'
import styled from 'styled-components'

const ViewButton = styled.button`
color:green;
margin-left: 10px;
`

class ViewPlayListTracks extends React.Component{

    state= {
    viewplaylisttrack:[     
            {
                "id": "1", 
                "name": "Axé", 
                "artist": "Ivete Sangalo",
                "url": "https://open.spotify.com/track/7LxiQ3v6iEaejUgnBBphNS"
            },
            
            {
                "id": "2", 
                "name": "Rock", 
                "artist": "Engenheiros do Hawaii",
                "url": "https://open.spotify.com/track/0JYM4qdSBmWatckVMyQbjX"
            }
            
            
        
        ]   
    }
    render(){

        const renderPlayListTrack = this.state.viewplaylisttrack.map (playlisttrack =>{
        return <p key={playlisttrack.id}>
            {playlisttrack.name, playlisttrack.artist, playlisttrack.url}
            <ViewButton>X</ViewButton>
            </p>    
        })

        return(
            <div>
                {renderPlayListTrack}
            </div>
        )
    }
}

export default ViewPlayListTracks
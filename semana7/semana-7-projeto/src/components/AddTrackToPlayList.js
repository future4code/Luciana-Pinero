import React from 'react'
import axios from 'axios'
import styled from 'styles-components'

const baseUrl="https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks"
const axiosConfig = {
    headers: {
      Authorization: "luciana-pinero-dumont"
    }
  };

class AddTrackToPlayList extends React.Component{
    state = {
        playlists:[],
        playlistTracks:[],
        playlistEdition: "editButton",
        name:"",
        artist:"",
        url:""
    }

    componentDidMount (){
        this.getPlaylistTracks();
    }
    
    getPlaylistTracks = (listId) =>{
        axios.get (baseUrl,axiosConfig)
        .then ((response)=>{
            this.setState({playlistTracks:response.data.result.tracks})
        }).catch ((error) =>{
            console.log (error.message)
        })
        }
    

    
    render(){
        return(
            <div>
                AddTrackToPlayList
            </div>
        )
    }
}

export default AddTrackToPlayList
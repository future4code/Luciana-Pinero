import React from 'react'
import styled from 'styled-components'
// import ViewPlayListTracks from './components/ViewPlayListTracks'

const DeleteButton = styled.button`
color:red;
margin-left: 10px;
`

class ViewAllPlayLists extends React.Component{

    state= {
    viewplaylist:[     
            {
                "id" : "1",
                "name" : "Axé"
            },
            
            {
                "id" : "2",
                "name" : "Rock"
            }
            
            
        
        ]   
    }
    render(){

        const renderPlayList = this.state.viewplaylist.map (playlist =>{
        return <p key={playlist.id}>
            {playlist.name}
            <DeleteButton>X</DeleteButton>
            </p>    
        })

        return(
            <div>
                {renderPlayList}
                {/* {ViewPlayListTracks} */}

            </div>
        )
    }
}

export default ViewAllPlayLists
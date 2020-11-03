import React from 'react'
import axios from 'axios'
import styled from "styled-components";

const Createbutton = styled.button`
  color: white;
  background-color: #F36003;
  margin-left: 10px;
  font-size:35px
`;

const Styleinput = styled.input`
font-size: 35px;
width:500px
`


class CreatePlayList extends React.Component{
state = {
    nameValue:""
}

createPlayList = () =>{
const body = {
    
        name: this.state.nameValue 
    }

axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body,{
    headers:{
        Authorization: "luciana-pinero-dumont"
    }
    }).then(response => {
	alert ("Playlist Criada com Sucesso!! ")
    this.setState ({nameValue : ""})
    }).catch(error => {
        console.log(error.message)
    })
    }
    


onChangeNameValue = (event) => {
	this.setState({nameValue: event.target.value})
}

    render(){
        console.log(this.state)
        return(
            <div>
                <Styleinput placeholder = {"Dê um nome para sua Playlist!"} value = { this.state.nameValue} onChange = {this.onChangeNameValue} />
                <Createbutton onClick={this.createPlayList}> Criar PlayList </Createbutton>
            </div>
        )
    }
}

export default CreatePlayList
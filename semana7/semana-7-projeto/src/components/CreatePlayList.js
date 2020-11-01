import React from 'react'
import axios from 'axios'

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
	alert ("Usuario Criado com Sucesso")
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
                <input value = { this.state.nameValue} onChange = {this.onChangeNameValue} />
                <button onClick={this.createPlayList}> Criar PlayList </button>
            </div>
        )
    }
}

export default CreatePlayList
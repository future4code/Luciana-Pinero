import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChooseButtons from './ChooseButtons';
import PersonInfo from './PersonInfo';
import axios from 'axios';



function ShowPersonScreen () {

    const [profileToChoose, setProfiletoChoose] = useState ({})  
    
   

    useEffect (() =>{
        axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Luciana-Pinero/person')
        .then (response =>{console.log ("PERFIL",)
        setProfiletoChoose (response.data.profile)

        })
    },[]);

    return(
    <div>
        
        <PersonInfo profile = {profileToChoose} />
        <ChooseButtons />   
    </div>
    )
    
}

export default ShowPersonScreen
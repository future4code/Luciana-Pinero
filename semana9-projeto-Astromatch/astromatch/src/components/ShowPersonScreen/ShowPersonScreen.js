import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import ChooseButtons from './ChooseButtons';
import PersonInfo from './PersonInfo';
import axios from 'axios';



function ShowPersonScreen () {

    const [profileToChoose, setProfiletoChoose] = useState ({undefined})  
    
    const getProfileToChoose = () => {
        axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Luciana-Pinero/person')
        .then (response =>{console.log ("PERFIL",)
        setProfiletoChoose (response.data.profile)

        })

    }

    const chooseProfile = (choice) => {
        const body = {
            
            choice: choice,
            id:profileToChoose.id
        }
        setProfiletoChoose(undefined)
        axios.post ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Luciana-Pinero/choose-person', body).then (response => {
            console.log (response)
            getProfileToChoose()
        })

    }

    useEffect (() =>{
        getProfileToChoose()
    },[]);

    const onClickNo = () => {
        chooseProfile (false)
    }

    const onClickYes = () => {
        chooseProfile (true)
    }


    return(
    <div>
        {profileToChoose ?
        (<>
        <PersonInfo profile = {profileToChoose} />
        <ChooseButtons onClickNo ={onClickNo} onClickYes = {onClickYes} />   
        </>) : <p> Carregando...</p>
        }
    </div>
    )
    
}

export default ShowPersonScreen
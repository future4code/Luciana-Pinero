import Axios from 'axios';
import React, { useEffect } from 'react';
import ChooseButtons from './ChooseButtons';
import PersonInfo from './PersonInfo';
import axios from 'axios';



function ShowPersonScreen () {

    const profileToChoose = {
        id: "xUrxMGvODWZa4ZASbfwx",
        age: 26,
        name: "Carol Danvers",
        photo: "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
        bio: "Gosto de voar e de gatos. Procuro relações que respeitem minha independência.",
        like:false
      }

    useEffect (() =>{
        axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Luciana-Pinero/person')
        .then (response =>{console.log ("PERFIL",response)

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
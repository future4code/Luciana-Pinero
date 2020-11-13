import React,{useState,useEffect} from 'react'
import { Name } from '../../components/PersonInfo/styled'
import Profile from '../../components/Profile/Profile'
import Styled from '../ShowPersonScreen/styled'
import Container from '../../components/Container/Container'
import axios from 'axios'
import {BASE_GETURL} from '../../constants/urls'



function ShowPersonScreen() {
  const [showPerson, setShowPerson] = useState ({})

  const getProfile = () =>{
    axios.get(`${BASE_GETURL}`)
    .then((response) => {
      setShowPerson(response.data)
      console.log('perfil', response.data)
   })
    .catch((error)=> alert(error))
  };
  
  useEffect(() => {
    getProfile()
  }, [])

  
    return (
      <Name>        
        <Container />
        <PersonInfo photo={showPerson.profile.photo} name={showPerson.profile.name} 
        age={showPerson.profile.age} bio={showPerson.profile.bio}/>
      </Name>
    );
  }
  
  export default ShowPersonScreen;
  
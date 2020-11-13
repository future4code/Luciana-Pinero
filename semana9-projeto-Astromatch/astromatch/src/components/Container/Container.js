import React,{useState} from 'react';
import { CardContainer, CardImage, CardText} from './styled'
import Header from '../Header/Header'
import Profile from '../Profile/Profile'

const data = {
    id: "xUrxMGvODWZa4ZASbfwx",
    age: 26,
    name: "Carol Danvers",
    photo: "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
    bio: "Gosto de voar e de gatos. Procuro relações que respeitem minha independência.",
    like:false
  }

function Container () {
    const [personData, setPersonData] = useState ({data})

    return (
        <CardContainer>
            <Header />
            <Profile dados= {personData} />
            

        </CardContainer>
    )

};

export default Container;
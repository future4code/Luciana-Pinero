import React, {useState} from 'react';
import Profile from './components/Profile/Profile.js'
;

const data = {
  id: "xUrxMGvODWZa4ZASbfwx",
  age: 26,
  name: "Carol Danvers",
  photo: "https://s1.r29static.com/bin/entry/7e8/340x408,85/2138124/image.webp",
  bio: "Gosto de voar e de gatos. Procuro relações que respeitem minha independência.",
  like:false
}

function App() {
  const [personData, setPersonData] = useState ({data})

  return (
    <div className="App">
      <Profile dados= {personData} />
    </div>
  );
}

export default App;

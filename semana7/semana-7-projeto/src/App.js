import React from 'react';
import styled from 'styled-components';
// import AddTrackToPlayList from './components/AddTrackToPlayList';
import CreatePlayList from './components/CreatePlayList';
import ViewAllPlayLists from './components/ViewAllPlayLists';
import {Title, TitleSmall} from './components/styles';

const div = styled.body`
background-color: #F36003;
color:white;

`

const Viewbutton = styled.button`
  color: white;
  background-color: #F36003;
  margin-left: 10px;
  font-size:35px
`;

class App extends React.Component {
  state ={
    createPlayList: true

  }

  changePage = () =>{
    this.setState({createPlayList : !this.state.createPlayList})
  }

  render(){
    const currentPage = this.state.createPlayList ? (<CreatePlayList />) : (<ViewAllPlayLists />)

    return (
      <div>
        <Title>Bem vindox ao Labefy! </Title>
        <TitleSmall> Crie agora a sua PlayList: </TitleSmall>
        {currentPage}
        {/* <AddTrackToPlayList />
        <ViewPlayListTracks /> */}
        

        <Viewbutton onClick={this.changePage}> Ver as Playlists </Viewbutton>
      </div>
    )
  }  
}

export default App;

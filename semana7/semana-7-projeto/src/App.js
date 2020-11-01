import React from 'react';
import styled from 'styled-components';
import AddTrackToPlayList from './components/AddTrackToPlayList';
import CreatePlayList from './components/CreatePlayList';
import DeletePlayList from './components/DeletePlayList';
import ViewAllPlayLists from './components/ViewAllPlayLists';


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
      <div className="App">
        {currentPage}
        {/* <AddTrackToPlayList />
        <CreatePlayList />
        <DeletePlayList />
        <ViewAllPlayLists />
        <ViewPlayListTracks /> */}
        

        <button onClick={this.changePage}> Ver as PlayLists </button>
      </div>
    )
  }  
}

export default App;

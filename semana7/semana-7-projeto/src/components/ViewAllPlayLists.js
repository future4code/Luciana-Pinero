import axios from "axios";
import React from "react";
import styled from "styled-components";

const DeleteButton = styled.button`
  color: white;
  background-color: #F36003;
  margin-left: 10px;
  font-size:15px
`;

const PlayList = styled.p`
  color: black;
  margin-left: 10px;
  font-size:25px
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const axiosConfig = {
  headers: {
    Authorization: "luciana-pinero-dumont"
  }
};

class ViewAllPlayLists extends React.Component {
  state = {
    listPlaylists: []
  };

  componentDidMount = () => {
    this.getAllPlayLists();
  };

  getAllPlayLists = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ listPlaylists: response.data.result.list });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  deletePlayList = (playlistId) => {  
    axios.delete(`${baseUrl}/${playlistId}`, axiosConfig)
      .then((response) => {
        alert("PlayList apagada com sucesso!");
        this.getAllPlayLists();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    const renderPlayList = this.state.listPlaylists.map((playlist) => {
      return (
        <PlayList key={playlist.id}>
          {playlist.name}
          <DeleteButton onClick={() => this.deletePlayList(playlist.id)}>
            DELETE
          </DeleteButton>
        </PlayList>
      );
    });

    return <div>{renderPlayList}</div>;
  }
}

export default ViewAllPlayLists;

import React from "react";
import "./styles.css";
import axios from "axios";

class App extends React.Component {
  state = {
    playlists: [],
    playlistValue: ""
  };

  componentDidMount = () => {
    this.pegarPlaylists();
  };

  pegarPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "severo-dumont"
          }
        }
      )
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.playlistValue
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "severo-dumont"
          }
        }
      )
      .then((res) => {
        this.setState({ playlistValue: "" });
        this.pegarPlaylists();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onChangePlaylistValue = (event) => {
    this.setState({ playlistValue: event.target.value });
  };

  render() {
    const renderedPlaylists = this.state.playlists.map((playlist) => {
      return <p key={playlist.id}>{playlist.name}</p>;
    });

    return (
      <div className="App">
        <div>
          <input
            placeholder="Nome da Playlist"
            value={this.state.playlistValue}
            onChange={this.onChangePlaylistValue}
          />
          <button onClick={this.criarPlaylist}>Criar Playlist</button>
        </div>
        {renderedPlaylists}
      </div>
    );
  }
}

export default App;

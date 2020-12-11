import logo from './logo.svg';
import './App.css';
import React from "react"
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home"
import Playlist from "./Playlist"
import Song from "./ShowSong"

function App() {

  // state to hold songs
  const [songs, setSongs] = React.useState([])

  // state to hold playlists
  const [playlists, setPlaylists] = React.useState([])

  // Fuction to make API call to get songs
  const getSongs = async () => {
    const response = await fetch("http://localhost:3000/songs")
    const data = await response.json()
    setSongs(data)
  }

  // Function to make API call to get Playlists
  const getPlaylists = async () => {
    const response = await fetch("http://localhost:3000/playlists")
    const data = await response.json()
    setPlaylists(data)
  }

  // run getSongs function when the component loads
  React.useEffect(()=> {
    getSongs()
  }, [])

  // run getPlaylists function when the component loads
  React.useEffect(()=> {
    getPlaylists()
  }, [])

  

  return (
    <div className="App">
      <nav className="links">
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/playlists">
          <a>Playlists</a>
        </Link>
      </nav>
      <Switch>
        <Route exact path="/" render={(rp) => <Home {...rp} songs = {songs}/>} />
        <Route exact path="/playlists" render={(rp) => <Playlist {...rp} playlists = {playlists}/>} />
        <Route exact path="/:id" render={(rp) => <Song {...rp} songs = {songs}/>} />
      </Switch>
    </div>
  );
}

export default App;

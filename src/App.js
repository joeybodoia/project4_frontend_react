import logo from './logo.svg';
import './App.css';
import React from "react"
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home"
import Playlist from "./Playlist"
import Song from "./ShowSong"
import ShowPlaylist from "./ShowPlaylist"
import SongForm from "./newSongForm"

function App() {

  // state to hold songs
  const [songs, setSongs] = React.useState([])

  // state to hold playlists
  const [playlists, setPlaylists] = React.useState([])

  // Fuction to make API call to get songs
  const getSongs = async () => {
    const response = await fetch("http://localhost:3000/songs")
    const data = await response.json()
    setSongs(data.reverse()) //reverse puts the created form data at the top of the page
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
      <header className="linksContainer" >
        <div className = "homeLinkContainer">
          <Link to="/" style={{"text-decoration":"none", "font-family":"'Rock Salt', cursive"}}>
            <a className="homeLink">Home</a>
          </Link>
        </div>
        <div className="playlistLinkContainer">
          <Link to="/playlists" style={{"text-decoration":"none", "font-family":"'Rock Salt', cursive"}}>
            <a className="playlistLink">Playlists</a>
          </Link>
        </div>
      </header>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Home {...rp} songs = {songs} getSongs={getSongs}/>} />
          <Route exact path="/playlists" render={(rp) => <Playlist {...rp} playlists = {playlists}/>} />
          <Route exact path="/:id" render={(rp) => <Song {...rp} songs = {songs}/>} />
          <Route exact path="/playlists/:id" render={(rp) => <ShowPlaylist {...rp} playlists = {playlists} songs = {songs}/>} />
          <Route exact path="/songs/new" render={(rp) => <SongForm {...rp} getSongs={getSongs}/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;

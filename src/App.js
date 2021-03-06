import logo from './logo.svg';
import './App.css';
import React from "react"
import { Route, Link, Switch } from "react-router-dom";
import Home from "./Home"
import Playlist from "./Playlist"
import Song from "./ShowSong"
import ShowPlaylist from "./ShowPlaylist"
import SongForm from "./newSongForm"
import EditForm from "./editForm"

function App() {

  // state to hold songs
  const [songs, setSongs] = React.useState([])

  // state to hold playlists
  const [playlists, setPlaylists] = React.useState([])

  const emptySong = {
    title: "",
    artist: "",
    coverArt: "",
    album: ""
  }

  const [selectedSong, setSelectedSong] = React.useState(emptySong)




  // Fuction to make API call to get songs
  const getSongs = async () => {
    const response = await fetch("https://rails-songs-playlists-api.herokuapp.com/songs")
    const data = await response.json()
    setSongs(data.reverse()) //reverse puts the created form data at the top of the page
  }

 

  // Function to make API call to get Playlists
  const getPlaylists = async () => {
    const response = await fetch("https://rails-songs-playlists-api.herokuapp.com/playlists")
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

   // handleUpdate function for when you use the updateform
   const handleUpdate = (song) => {
    fetch("https://rails-songs-playlists-api.herokuapp.com/songs/" + song.id, {
      method: "put",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify(song)
    })
    .then((response) => getSongs())
  }

  const selectSong = (song) => {
    setSelectedSong(song)
  }

  

  return (
    <div className="App">
      <header className="linksContainer" >
        <div className = "homeLinkContainer">
          <Link to="/" className = "linkHome" style={{"text-decoration":"none", "font-family":"'Rock Salt', cursive"}}>
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
          <Route exact path="/" render={(rp) => <Home {...rp} selectSong = {selectSong} songs = {songs} getSongs={getSongs}/>} />
          <Route exact path="/playlists" render={(rp) => <Playlist {...rp} playlists = {playlists}/>} />
          <Route exact path="/:id" render={(rp) => <Song {...rp} songs = {songs} getSongs={getSongs}/>} />
          <Route exact path="/playlists/:id" render={(rp) => <ShowPlaylist {...rp} playlists = {playlists} songs = {songs} getSongs={getSongs}/>} />
          <Route exact path="/songs/new" render={(rp) => <SongForm {...rp} getSongs={getSongs}/>}/>
          <Route exact path="/:id/edit" render={(rp) => <EditForm {...rp} songs = {songs} song= {selectedSong} getSongs={getSongs} handleSubmit={handleUpdate}/>}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;

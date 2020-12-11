import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {

  // state to hold songs
  const [songs, setSongs] = React.useState([])

  // Fuction to make API call to get songs
  const getSongs = async () => {
    const response = await fetch("http://localhost:3000/songs")
    const data = await response.json()
    setSongs(data)
  }

  // run getSongs function when the component loads
  React.useEffect(()=> {
    getSongs()
  }, [])

  const loaded = () => (
    <>
    {songs.map((song)=> {
      return(
        <div>
          <h1>{song.title}</h1>
        </div>
      )
    })}
    </>
  )




  return (
    <div className="App">
      <h1>Playlist App</h1>
      {songs.length > 0 ? loaded() : <h2>There are no songs!</h2>}
    </div>
  );
}

export default App;

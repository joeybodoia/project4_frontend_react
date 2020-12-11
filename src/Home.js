import React from "react"
import { Route, Link, Switch } from "react-router-dom";
import Song from "./ShowSong"


const Home = (props) => {

    

    const {songs} = props

    const {getSongs} = props

    const loadedSongs = () => (
        <>
        {songs.map((song)=> {
          return(
            <div style={{"border":"2px solid black"}}>
              <h1>{song.title}</h1>
              <h2>{song.artist}</h2>
              <Link to={`/${song.id}`}>
                <a>View Song</a>
              </Link>
              <button onClick={async () => {
            // make delete request
            await fetch("http://localhost:3000/songs/" + song.id, {
              method: "delete"
            })
            // get updated list of notices
            getSongs()
          }}>Delete</button>
            </div>
          )
        })}
        </>
      )
    return(
        <div>
            <h1>Home</h1>
            {songs.length > 0 ? loadedSongs() : <h2>There are no songs!</h2>} 
        </div>
    )
}

export default Home
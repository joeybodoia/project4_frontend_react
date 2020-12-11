import React from "react"
import { Route, Link, Switch } from "react-router-dom";
import Song from "./ShowSong"


const Home = (props) => {

    

    const {songs} = props

    const {getSongs} = props

    const loadedSongs = () => (
        <div className="songsContainer" style={{"border":"2px solid green", "margin-top": "4vw"}}>
        {songs.map((song)=> {
          return(
           
                <div className = "song" style={{"border":"2px solid red"}}>
                    <h1>{song.title}</h1>
                    <h2>{song.artist}</h2>
                    <div className="container">
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
                </div>
          )
        })}
        </div>
      )
    return(
        <div>
            <h1 style={{"margin-top":"2vw", "margin-bottom": "2vw"}}>All Songs</h1>
            <Link to="/songs/new">
                <a>New Song</a>
            </Link>
            {songs.length > 0 ? loadedSongs() : <h2>There are no songs!</h2>} 
        </div>
    )
}

export default Home
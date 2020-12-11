import React from "react"
import { Route, Link, Switch } from "react-router-dom";
import Song from "./ShowSong"


const Home = (props) => {

    

    const {songs} = props

    const {getSongs} = props

    const loadedSongs = () => (
        <div className="songsContainer" style={{ "margin-top": "4vw"}}>
        {songs.map((song)=> {
          return(
           
                <div className = "song" style={{"background-image":`url(${song.coverArt})`, "background-size":"cover"}}>
                    <h1 style={{"color":"lightgray", "text-shadow":"2px 2px 0 red"}}>{song.title}</h1>
                    <h2 style={{"color":"white", "text-shadow":"2px 2px 0 red"}}>{song.artist}</h2>
                    <div className="container">
                        <Link to={`/${song.id}`}>
                            <button><a>View Song</a></button>
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
                <button><a>New Song</a></button>
            </Link>
            {songs.length > 0 ? loadedSongs() : <h2>There are no songs!</h2>} 
        </div>
    )
}

export default Home
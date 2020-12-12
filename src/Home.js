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
                    <div style={{"border":"2px solid black", "background-color":"gray", "border-radius": "4px"}}>
                        <h1 style={{"color":"white", "font-family":"'Rock Salt', cursive", "font-size": "1.4vw","border":"2px red", "text-shadow":"1px 1px 0 black"}}>{song.title}</h1>
                    </div>
                    <div style={{"border":"2px solid black", "background-color":"lightpink","border-radius": "4px"}}>
                        <h2 style={{"color":"black", "text-shadow":"1px 1px 0 white","font-family":"'Rock Salt', cursive", "font-size": "1vw"}}>{song.artist}</h2>
                    </div>
                    <div className="container">
                        <Link to={`/${song.id}`}>
                            <button style={{"font-family":"'Rock Salt', cursive", "font-size":"0.8vw", "border":"2px solid gray", "border-radius":"4px", "background-color": "black", "color": "white"}}><a>View Song</a></button>
                        </Link>
                        <button  style={{"font-family":"'Rock Salt', cursive", "font-size":"0.8vw", "background-color":"red", "border":"2px solid black", "border-radius":"4px", "color":"white"}} onClick={async () => {
                        // make delete request
                        await fetch("http://localhost:3000/songs" + song.id, {
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
            <h1 style={{"margin-top":"2vw", "margin-bottom": "2vw", "font-family":"'Rock Salt', cursive", "color":"lightpink"}}>All Songs</h1>
            <Link to="/songs/new">
                <button style={{"font-family":"'Rock Salt', cursive", "border": "2px solid lightpink", "border-radius": "3px", "background-color": "gray", "color": "white"}}><a>New Song</a></button>
            </Link>
            {songs.length > 0 ? loadedSongs() : <h2>There are no songs!</h2>} 
        </div>
    )
}

export default Home



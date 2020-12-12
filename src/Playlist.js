import React from "react"
import { Route, Link, Switch } from "react-router-dom";


const Playlist = (props) => {

    const {playlists} = props

    const loadedPlaylists = () => (
        <div className="playlistsContainer">
        {playlists.map((playlist)=> {
          return(
            <div style={{"border":"3px solid white", "border-radius":"5px", "width":"50%", "margin-right":"auto", "margin-left":"auto", "margin-bottom":"4vw", "padding-bottom":"2vw", "background-color":"gray"}}>
              <h1 style={{"color":"white", "font-family":"'Rock Salt', cursive", "font-size":"2vw"}}>{playlist.name}</h1>
              <Link style={{"text-decoration":"none", "font-family":"'Rock Salt', cursive"}} to={`/playlists/${playlist.id}`}>
                <a className="viewPlaylistLink">View Playlist</a>
              </Link>
            </div>
          )
        })}
        </div>
      )


    return(
        <div>
            <h1 style={{"color":"lightpink", "font-family":"'Rock Salt', cursive", "font-size":"2vw", "margin-bottom":"4vw"}}>Playlists</h1>
            <h2>{playlists.name}</h2>
            {playlists.length > 0 ? loadedPlaylists() : <h2>No Playlists!</h2> }
        </div>
    )
}

export default Playlist
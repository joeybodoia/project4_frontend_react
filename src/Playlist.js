import React from "react"
import { Route, Link, Switch } from "react-router-dom";


const Playlist = (props) => {

    const {playlists} = props

    const loadedPlaylists = () => (
        <>
        {playlists.map((playlist)=> {
          return(
            <div style={{"border":"2px solid black"}}>
              <h1 style={{"color":"white"}}>{playlist.name}</h1>
              <Link to={`/playlists/${playlist.id}`}>
                <a>View Playlist</a>
              </Link>
            </div>
          )
        })}
        </>
      )


    return(
        <div>
            <h1>Playlists</h1>
            <h2>{playlists.name}</h2>
            {playlists.length > 0 ? loadedPlaylists() : <h2>No Playlists!</h2> }
        </div>
    )
}

export default Playlist
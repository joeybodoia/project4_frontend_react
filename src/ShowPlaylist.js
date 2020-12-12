import React from "react"
import { Route, Link, Switch } from "react-router-dom";


const ShowPlaylist = (props) => {

    const {playlists} = props

    const {songs} = props
    // const {songs} = props.songs

    const {getSongs} = props

    const loadPlaylist = () => (
        <>
        {/* {console.log(props.match.params.id)} */}
        {playlists.map((playlist)=> {
            if (playlist.id == props.match.params.id) {
                return(
                  <div style={{"margin-top":"-3vw"}}>
                    <h1 style={{"color":"lightpink", "font-family":"'Rock Salt', cursive", "font-size":"3vw"}}>{playlist.name}</h1>
                  </div>
                )

            }
        })}
        </>

    )

    const loadPlaylistSongs = () => (
        <div className="songsContainer" style={{ "margin-top": "4vw"}}>
        {songs.map((song)=> {
            if (song.playlists.length>0){
                console.log(song.playlists[0].id)
                if (song.playlists[0].id == props.match.params.id) {
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
                            await fetch("https://rails-songs-playlists-api.herokuapp.com/songs/" + song.id, {
                            method: "delete"
                            })
                            // get updated list of notices
                            getSongs()
                            }}>Delete</button>
                        </div>
                    </div>
                    )

                }
            }
        })}
        </div>

    )
    return(
        <div>
            <h1>Playlist page</h1>
            {loadPlaylist()}
            {loadPlaylistSongs()}
        </div>
    )
}


export default ShowPlaylist
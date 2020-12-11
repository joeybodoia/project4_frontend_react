import React from "react"


const ShowPlaylist = (props) => {

    const {playlists} = props

    const loadPlaylist = () => (
        <>
        {console.log(props.match.params.id)}
        {playlists.map((playlist)=> {
            if (playlist.id == props.match.params.id) {
                return(
                  <div style={{"border":"2px solid black"}}>
                    <h1>{playlist.name}</h1>
                  </div>
                )
                
            }
        })}
        </>

    )
    return(
        <div>
            <h1>Playlist page</h1>
            {loadPlaylist()}
        </div>
    )
}


export default ShowPlaylist
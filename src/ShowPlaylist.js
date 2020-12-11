import React from "react"


const ShowPlaylist = (props) => {

    const {playlists} = props

    const {songs} = props
    // const {songs} = props.songs

    const loadPlaylist = () => (
        <>
        {/* {console.log(props.match.params.id)} */}
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

    const loadPlaylistSongs = () => (
        <>
        {songs.map((song)=> {
            if (song.playlists.length>0){
                console.log(song.playlists[0].id)
                if (song.playlists[0].id == props.match.params.id) {
                    return(
                      <div style={{"border":"2px solid black"}}>
                        <h1>{song.artist}</h1>
                      </div>
                    )

                }
            }
        })}
        </>

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
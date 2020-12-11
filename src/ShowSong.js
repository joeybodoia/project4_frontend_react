import React from "react"



const Song = (props) => {

    const {songs} = props

    const loadSong = () => (
        <>
        {console.log(props.match.params.id)}
        {songs.map((song)=> {
            if (song.id == props.match.params.id) {
                return(
                  <div style={{"border":"2px solid black"}}>
                    <h1>{song.title}</h1>
                    <h2>{song.artist}</h2>
                    <img src={song.coverArt}></img>
                  </div>
                )
            }
        })}
        </>
    )
    return(
        <div>
            <h1>Song page</h1>
            {loadSong()}
        </div>
    )
}


export default Song
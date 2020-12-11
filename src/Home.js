import React from "react"


const Home = (props) => {

    const {songs} = props

    const loadedSongs = () => (
        <>
        {songs.map((song)=> {
          return(
            <div style={{"border":"2px solid black"}}>
              <h1>{song.title}</h1>
              <h2>{song.artist}</h2>
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
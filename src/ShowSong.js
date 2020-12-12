import React from "react"
import { Route, Link, Switch } from "react-router-dom";



const Song = (props) => {

    const {songs} = props

    const {getSongs} = props


    const loadSong = () => (
        <>
        {console.log(props.match.params.id)}
        {songs.map((song)=> {
            if (song.id == props.match.params.id) {
                return(
                  <div style={{ "display":"flex", "justifyContent":"center", "margin-top": "5%"}}>
                      <div style={{"display": "flex", "flex-direction":"column", "border":"3px solid lightpink", "width":"50%", "height":"59vw", "justifyContent":"center", "border-radius": "3px", "background-color":"gray"}}>
                        <h1 style={{"color":"white","font-family":"'Rock Salt', cursive", "font-size": "2vw"}}>Title: {song.title}</h1>
                        <img src={song.coverArt} style={{"width":"60%", "margin-left":"auto", "margin-right":"auto", "border":"3px solid white", "border-radius": "3px"}}></img>
                        <h2 style={{"color":"white", "font-family":"'Rock Salt', cursive","font-size": "1.7vw"}}>Artist: {song.artist}</h2>
                        <h2 style={{"color":"white", "font-family":"'Rock Salt', cursive", "font-size": "1.5vw"}}>Album: {song.album}</h2>
                        {/* <Link to={`/${song.id}/edit`}>
                            <button style={{"font-family":"'Rock Salt', cursive", "font-size":"0.8vw", "border":"2px solid gray", "border-radius":"4px", "background-color": "black", "color": "white"}}><a>Edit Song</a></button>
                        </Link> */}
                      </div>
                  </div>
                )
            }
        })}
        </>
    )
    return(
        <div>
            
            {loadSong()}
        </div>
    )
}


export default Song
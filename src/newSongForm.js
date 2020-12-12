import React from "react"


const SongForm = (props) => {

    // const {getSongs} = props

    // state to hold form data
    const [songForm, setSongForm] = React.useState({
        title: "",
        artist: "",
        coverArt: "",
        album: ""
    })

    // handleChange funtion to create form
    const handleChange = (event) => {
        setSongForm({...songForm,[event.target.name]:event.target.value})
    }

    // handleSubmit function for when the form is submitted
    const handleSubmit = async (event) => {
        event.preventDefault()
        await fetch("https://rails-songs-playlists-api.herokuapp.com/songs", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(songForm)
        })

        props.getSongs()
        setSongForm({
            title: "",
            artist: "",
            coverArt: "",
            album: ""
        })
        props.history.push("/")
    }
    return(
        <div>
            <h1 style={{"color":"white", "margin-bottom":"5vw", "font-family":"'Rock Salt', cursive", "font-size":"2vw", "color":"lightpink"}}>Add New Song</h1>
            
            <form onSubmit={handleSubmit} style={{"border":"3px solid white", "border-radius":"5px" , "height": "25vw", "width": "38%", "display":"flex", "flex-direction":"column", "justifyContent": "space-around", "margin-right":"auto", "margin-left":"auto", "background-image":`url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.adweek.com%2Fadweek.com-prod%2Fwp-content%2Fuploads%2F2017%2F11%2FApple-MUSIC_0002_FLUME.jpg&f=1&nofb=1)`, "background-size":"cover"}}>
                <input style={{"width":"70%", "margin-right":"auto", "margin-left":"auto","margin-top":"1.2vw", "border":"2px solid gray", "border-radius":"5px", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw"}} type="text" name="title" value={songForm.title} onChange={handleChange} placeholder="Title"/>
                <input style={{"width":"70%", "margin-right":"auto", "margin-left":"auto", "border":"2px solid gray", "border-radius":"5px", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw"}} type="text" name="artist" value={songForm.artist} onChange={handleChange}placeholder="Artist"/>
                <input style={{"width":"70%", "margin-right":"auto", "margin-left":"auto", "border":"2px solid gray", "border-radius":"5px", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw"}} type="text" name="coverArt" value={songForm.coverArt} onChange={handleChange}placeholder="Cover Art (image link)"/>
                <input style={{"width":"70%", "margin-right":"auto", "margin-left":"auto", "border":"2px solid gray", "border-radius":"5px", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw"}} type="text" name="album" value={songForm.album} onChange={handleChange}placeholder="Album"/>
                <input style={{"width":"30%", "margin-right":"auto", "margin-left":"auto","margin-bottom":"1.2vw", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw", "background-color": "lavender", "border":"2px solid gray", "border-radius":"5px"}} type="submit" value="Create Song"/>
            </form>
            
        </div>
    )
}


export default SongForm
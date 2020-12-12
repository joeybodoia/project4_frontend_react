import React from "react"


const SongForm = (props) => {

    const {getSongs} = props

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
        await fetch("http://localhost:3000/songs", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(songForm)
        })

        getSongs()
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
            <h1 style={{"color":"white"}}>Song Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={songForm.title} onChange={handleChange}/>
                <input type="text" name="artist" value={songForm.artist} onChange={handleChange}/>
                <input type="text" name="coverArt" value={songForm.coverArt} onChange={handleChange}/>
                <input type="text" name="album" value={songForm.album} onChange={handleChange}/>
                <input type="submit" value="Create Song"/>
            </form>
        </div>
    )
}


export default SongForm
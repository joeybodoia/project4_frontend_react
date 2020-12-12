import React from "react"


const EditForm = (props) => {

    // const {getSongs} = props
    // const {songs} = props

    
       
    // state to hold form data
    const [editForm, setEditForm] = React.useState(props.song)

    const handleSubmit = async (event) => {
        event.preventDefault()
        props.handleSubmit(editForm)
        props.history.push("/")
    }

    // handleChange funtion to create form
    const handleChange = (event) => {
        setEditForm({...editForm,[event.target.name]:event.target.value})
    }


    return(
        <div>
            <h1 style={{"color":"white", "margin-bottom":"5vw", "font-family":"'Rock Salt', cursive", "font-size":"2vw", "color":"lightpink"}}>Edit Song</h1>
            
            <form onSubmit={handleSubmit} style={{"border":"3px solid white", "border-radius":"5px" , "height": "25vw", "width": "38%", "display":"flex", "flex-direction":"column", "justifyContent": "space-around", "margin-right":"auto", "margin-left":"auto", "background-image":`url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.adweek.com%2Fadweek.com-prod%2Fwp-content%2Fuploads%2F2017%2F11%2FApple-MUSIC_0002_FLUME.jpg&f=1&nofb=1)`, "background-size":"cover"}}>
                <input style={{"width":"70%", "margin-right":"auto", "margin-left":"auto","margin-top":"1.2vw", "border":"2px solid gray", "border-radius":"5px", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw"}} type="text" name="title" value={editForm.title} onChange={handleChange} placeholder="Title"/>
                <input style={{"width":"70%", "margin-right":"auto", "margin-left":"auto", "border":"2px solid gray", "border-radius":"5px", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw"}} type="text" name="artist" value={editForm.artist} onChange={handleChange}placeholder="Artist"/>
                <input style={{"width":"70%", "margin-right":"auto", "margin-left":"auto", "border":"2px solid gray", "border-radius":"5px", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw"}} type="text" name="coverArt" value={editForm.coverArt} onChange={handleChange}placeholder="Cover Art (image link)"/>
                <input style={{"width":"70%", "margin-right":"auto", "margin-left":"auto", "border":"2px solid gray", "border-radius":"5px", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw"}} type="text" name="album" value={editForm.album} onChange={handleChange}placeholder="Album"/>
                <input style={{"width":"30%", "margin-right":"auto", "margin-left":"auto","margin-bottom":"1.2vw", "font-family":"'Rock Salt', cursive", "font-size":"0.7vw", "background-color": "lavender", "border":"2px solid gray", "border-radius":"5px"}} type="submit" value="Update Song"/>
            </form>

            
        </div>
    )
}


export default EditForm
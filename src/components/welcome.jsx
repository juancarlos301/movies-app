import React from "react";
import video from '../assets/sonic.mp4'
import '../styles/Welcome.css'
import Navbar from './Navbar'
const Welcome = (props) => {

    return (
        <div className="container-video">
            <Navbar query={props.query} searchMovie={props.searchMovie} ChangeHandler={props.ChangeHandler} />
            <video src={video} autoPlay loop className="videito" muted />
        </div>
    )
}
export default Welcome;
import React from "react";
import ListFavsMovies from "../components/ListOfFavsMovies";
import Navbar from '../components/Navbar'

import '../styles/Favs.css'
const Favs = () => {

    const list = true

    return (
        <div className="con-grid">
            <div className="navbar">
                <Navbar />
            </div>
            <div>
                <ListFavsMovies list={list} />
            </div>
        </div>
    )
}
export default Favs;
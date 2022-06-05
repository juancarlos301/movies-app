import React, { useState } from "react";
import '../styles/Navbar.css'
import Logo from "../assets/svg";
import { Link } from "react-router-dom";
const Navbar = (props) => {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const searchMovie = props.searchMovie
    const value = props.value
    const ChangeHandler = props.ChangeHandler
    return (
        <nav className="navbar"
        >
            <div
                className={click ? "navbar-content open" : "navbar-content close"}
            >
                <Logo />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/favs">Favorites</Link></li>
                    <form className="form-search" onSubmit={searchMovie}>
                        <input type="search" placeholder="Movie Search"
                            className="input-search" value={value}
                            onChange={ChangeHandler}
                        />
                        <button type="submit" className="button-search">Search</button>
                    </form>
                </ul>
            </div>

            <div className="barras">
                <button onClick={handleClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>


        </nav>
    )
}
export default Navbar;
import React from "react";
import '../styles/Detail.css'
const DetailModal = ({ poster_path, title, overview, onClick, release_date, vote_average }) => {
    const URL_IMG = 'https://image.tmdb.org/t/p/w500/'

    return (
        <div className="container-detail">
            <div className="container-img">
                <img src={URL_IMG + poster_path} alt="" />
            </div>
            <div className="container-text">
                <div>
                    <h1>{title}</h1>
                    <h3>{overview}</h3>
                </div>
                <div>
                    <h2>Vote average:{vote_average}</h2>
                    <h3>Release date: {release_date}</h3>
                </div>
                <div className="con-buttons">
                    <button onClick={onClick}>cerrar</button>
                    <button onClick={onClick} className="btn-2">Ver más</button>
                </div>
            </div>
        </div>
    )
}
export default DetailModal;
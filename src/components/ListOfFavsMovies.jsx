import React, { useEffect, useContext, Fragment } from "react";
import { AppContext } from "../context";
import { MovieItem } from "./MovieItem";
import '../styles/ListOfMovie.css'

const ListFavsMovies = (props) => {

    const { favorites, setFavorites } = useContext(AppContext)

    useEffect(() => {
        let getFavorites = JSON.parse(localStorage.getItem('favorites')) || []
        setFavorites(getFavorites)
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);


    function createFavorite(movie) {
        setFavorites([...favorites, movie]);
    }

    function deleteFavorite(movie) {
        setFavorites(favorites.filter(fav => fav.id !== movie.id));
    }
    return (
        <div className={props.list ? "container-grid" : "container-all"}>
            <div className="con-text">
                <h1 className="text">Favorites</h1>
            </div>
            <ul className={props.list ? "grid-con" : "container"}>
                {favorites.map(movie =>
                    <MovieItem
                        key={movie.id}
                        favorites={favorites}
                        createFavorite={createFavorite}
                        deleteFavorite={deleteFavorite}
                        movie={movie}
                    />)}
            </ul>
        </div>
    )
}
export default ListFavsMovies
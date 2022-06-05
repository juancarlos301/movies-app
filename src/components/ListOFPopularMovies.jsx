import React, { useContext } from "react";
import { MovieItem } from "./MovieItem";
import '../styles/ListOfMovie.css'
import { AppContext } from "../context";

const ListOFPopularMovies = (props) => {

    const { Loading, movies } = props

    const { favorites, setFavorites } = useContext(AppContext)

    function createFavorite(movie) {
        setFavorites([...favorites, movie]);
    }

    function deleteFavorite(movie) {
        setFavorites(favorites.filter(fav => fav.id !== movie.id));
    }

    return (
        <div className={props.list ? "container-grid" : "container-all"}>
            <h1 className="text">{props.title}</h1>
            {Loading ? (<h1>loading...</h1>) : (
                <ul className={props.list ? "grid-con" : "container"}>
                    {movies.map(movie => <MovieItem
                        key={movie.id}
                        favorites={favorites}
                        createFavorite={createFavorite}
                        deleteFavorite={deleteFavorite}
                        movie={movie}
                    />)}
                </ul>
            )}


        </div>
    )
}

export default ListOFPopularMovies;
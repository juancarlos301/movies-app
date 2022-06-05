import React, { useState } from "react";
import Modal from "../Modal/Modal";
import DetailModal from "./detailModal";
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import '../styles/Movieitem.css'


function isFavorite(movie, favorites) {
    return favorites.filter(fav => fav.id === movie.id).length;
}

const MovieItem = props => {

    const movie = props.movie

    const URL_IMG = 'https://image.tmdb.org/t/p/w500/'

    const [onModal, setOnModal] = useState(false)


    const onClick = () => {
        setOnModal(prevState => !prevState)
    }

    const onClickfav = () => {
        if (isFavorite(movie, props.favorites)) {
            props.deleteFavorite(movie)
        } else {
            props.createFavorite(movie)
        }
    }
    const Icon = isFavorite(movie, props.favorites) ? MdFavorite : MdFavoriteBorder


    return (
        <li className="container_imag">
            <button onClick={onClick}>
                <img src={URL_IMG + movie.poster_path} alt="" className="imag" />
            </button>
            <button className="button-fav" onClick={onClickfav} poster_path={movie.poster_path}>
                <Icon size="32px" />
                Añadir a favoritos
            </button>
            {onModal &&
                <Modal>
                    <DetailModal poster_path={movie.poster_path} title={movie.title} overview={movie.overview}
                        onClick={onClick} vote_average={movie.vote_average} release_date={movie.release_date} />
                </Modal>
            }
        </li>
    )
}

export { MovieItem, isFavorite }
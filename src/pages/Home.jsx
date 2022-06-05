import React, { useEffect, useState } from "react";
import ListFavsMovies from "../components/ListOfFavsMovies";
import ListOFPopularMovies from "../components/ListOFPopularMovies";
import Welcome from "../components/welcome";

import '../styles/index.css'

const Home = () => {
    const list = true
    const [searchPage, setSearchPage] = useState(1);

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [popularMovies, setPopularMovies] = useState([])


    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=27234eafe714de6b27bd9c9c0d6e915f&language=en-US&page=${searchPage}`

    useEffect(() => {
        fetch(API_URL).then(res => res.json())
            .then(data => {
                setLoading(false)
                setMovies([...movies, ...data.results])
                setPopularMovies([...data.results])
            })
    }, [searchPage])

    const [query, setQuery] = useState('')

    const searchMovie = async (e) => {
        e.preventDefault()
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=27234eafe714de6b27bd9c9c0d6e915f&language=en-US&query=${query}`
            const res = await fetch(url)
            const data = await res.json()
            query.length === 0 ? console.log('no buscaste nada') :
                setMovies(data.results)

        } catch (e) {
            console.log(e)
        }
    }

    const ChangeHandler = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div>
            <Welcome query={query} searchMovie={searchMovie} ChangeHandler={ChangeHandler} />
            <ListOFPopularMovies
                movies={popularMovies}
                loading={loading}
                title="Popular Movies"
            />
            <ListFavsMovies />

            <ListOFPopularMovies
                list={list}
                title="Movies"
                movies={movies}
                loading={loading} />

            <div className="div-button">
                <button className="button-more"
                    onClick={() => setSearchPage(searchPage + 1)}
                >Get More</button>
            </div>
        </div>

    )
}
export default Home;
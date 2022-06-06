import React, { useEffect, useState, useRef } from "react";
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
    //observer

    const LazyLoad = () => {
        const [show, setShow] = useState(false)
        const element = useRef()

        useEffect(function () {
            const onLoad = (entries, observer) => {
                const el = entries[0]
                if (el.isIntersecting) {
                    setShow(true)
                    setSearchPage(searchPage + 1)
                    observer.disconnect()
                }
            }
            const observer = new IntersectionObserver(onLoad, {
                rootMargin: '200px'
            })
            observer.observe(element.current)

        })
        return <div ref={element}>
            {!show && null}
        </div>
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

            <LazyLoad />
        </div>

    )
}
export default Home;
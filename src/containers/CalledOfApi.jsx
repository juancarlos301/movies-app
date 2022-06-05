/*import React, { useState, Fragment } from "react";
import Searched from "../components/searched";

const CalledOfApi = () => {

    const api_key = '27234eafe714de6b27bd9c9c0d6e915f'
    const baseURL = 'https://api.themoviedb.org/3/'

    const [ChangeState, setChangeState] = useState('')
    const [onSubmit, setOnSubmit] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch(`${baseURL}search/movie?api_key=${api_key}`)
            .then(data => data.json())
            .then(data => {
                console.log(data)
                setOnSubmit({ movies: [...data.results] })
            })
    }
    const Onchange = (e) => {
        setChangeState(e.target.value)
    }
    return (
        <Fragment>
<Searched  onChange={Onchange} handleSubmit={handleSubmit}/>
        </Fragment>
    )
}
export default CalledOfApi;
*/
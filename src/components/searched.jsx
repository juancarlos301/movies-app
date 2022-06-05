import React from "react";

const Searched = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <input placeholder="buscar" onChange={props.onchange} />
            <button type="submit">buscar</button>
        </form>
    )
}
export default Searched;
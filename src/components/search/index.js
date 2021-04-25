import React from 'react';
import './search.css';

function Search(props) {
    return (
        <form className="row d-flex justify-content-center">
            <input 
                className="search-query col-md-4" 
                type="text" 
                placeholder="Search" 
                onChange={props.inputHandler}
                value={props.search}
            />
            <button
                className="btn btn-outline"
                type="submit"
            >Submit</button>
        </form>
    )
}

export default Search;
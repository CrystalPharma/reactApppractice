import React from 'react'

function searchMovie(props) {
    return (
        <form>
          <div className="form-group">
            <label htmlFor="search">Search:</label>
            <input
              onChange={props.handleInputChange}
              value={props.search}
              name="search"
              type="text"
              className="form-control"
              placeholder="Search for a Movie"
              id="search"
            />
            <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
              Search
            </button>
          </div>
        </form>
      );
}

export default searchMovie
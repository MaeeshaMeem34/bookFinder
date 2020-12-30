import React, { useState, useEffect } from "react";
import { getBookDetails } from "./../api/BookApi";
import { Link } from "react-router-dom";

const BookDetails = (props) => {
  const [currentMovie, setCurrentMovie] = useState({});

  const ImageURL = currentMovie.imageLinks;

  useEffect(() => {
    getBookDetails(props.location.book_id, setCurrentMovie);
  }, []);

  console.log(props.location.book_id);

  return (
    <div>
      <div className="row">
        <div className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <span className="card-title">{currentMovie.kind}</span>
              {ImageURL != null ? (
                <img
                  src={ImageURL.thumbnail}
                  alt=""
                  style={{ width: "100%" }}
                />
              ) : (
                <img
                  src="https://picsum.photos/300/600"
                  alt=""
                  style={{ width: "300", height: "600" }}
                />
              )}
              <span class="card-title">{currentMovie.title}</span>
            </div>
            <div className="card-content">
              <h5>{currentMovie.subtitle}</h5>
              <p>{currentMovie.authors}</p>
              <p>Maturity Rating: {currentMovie.maturityRating}</p>
              <p>Published Date: {currentMovie.publishedDate}</p>
              <p>Average Rating: {currentMovie.averageRating}</p>
            </div>
            <div className="card-action">
              <Link to="/">Go to search page!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;

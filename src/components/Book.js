import React from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  const ImageURL = props.data.volumeInfo.imageLinks;
  return (
    <div className="col s3 m4 l4">
      <div className="card large">
        <div className="card-image waves-effect waves-block waves-light">
          <div className="card-image">
            {ImageURL == null ? (
              <img
                className="activator"
                src="https://picsum.photos/200/300"
                alt=""
                style={{ width: "100", height: "200" }}
              />
            ) : (
              <img className="activator" alt="" src={ImageURL.thumbnail} />
            )}
          </div>
        </div>
        <div className="card-content">
          <h5 style={{ fontFamily: "sans-serif" }}>
            {props.data.volumeInfo.title}
          </h5>

          <p> {props.data.volumeInfo.authors}</p>
          <p> {props.data.volumeInfo.publishedDate}</p>
        </div>

        <div className="card-action">
          <Link
            to={{
              pathname: "/book/" + props.data.id,
              book_id: props.data.id,
            }}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;

import React from "react";
import { select } from "semantic-ui-react";
const SearchBar = (props) => {
  return (
    <div className="container">
      <div className="row">
        <section className="col s6 offset-s4">
          <form action="" onSubmit={props.handleSubmit}>
            <div className="search-area">
              <input
                placeholder="Search for Books"
                type="text"
                onChange={props.handleChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default SearchBar;

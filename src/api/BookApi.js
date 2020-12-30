import axios from "axios";

const bookapi = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});

const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages) => {
  bookapi
    .get("/volumes/", {
      params: {
        q: SearchTerm,
        key: "AIzaSyCHz-CPljcLxSBJwJ_XGPfV8fdhWWWfOgQ",
        startIndex: page_number,
        maxResults: 12,
      },
    })
    .then((response) => {
      console.log(response);
      setBooks(response.data.items);
      if (response.data.totalItems % 10 == 0) {
        setTotalPages(parseInt(response.data.totalItems / 40));
      } else {
        setTotalPages(parseInt(response.data.totalItems / 40) + 1);
      }
    });
};

const getBookDetails = (bookID, setCurrentBook) => {
  bookapi
    .get("/volumes/" + bookID, {
      params: {
        key: "AIzaSyCHz-CPljcLxSBJwJ_XGPfV8fdhWWWfOgQ",
      },
    })
    .then((response) => {
      console.log(response.data);
      setCurrentBook(response.data.volumeInfo);
    });
};

export { getBooksByTerm, getBookDetails };

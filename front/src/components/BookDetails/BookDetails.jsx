import React from "react";

import { useQuery } from "@apollo/client";

import queries from "./BookList.gql";

function BookList() {
  const { loading, error, data } = useQuery(queries.GET_BOOKS);

  if (loading) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>Error </p>;
  }

  return (
    <div>
      <ul>
        {data
          ? data.books.map((book) => {
              return <li key={book.id}>{book.name}</li>;
            })
          : null}
      </ul>
    </div>
  );
}

export default BookList;

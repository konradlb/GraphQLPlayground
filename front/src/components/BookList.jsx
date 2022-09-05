import React from "react";

import { useQuery, gql } from "@apollo/client";

const GET_BOOKS = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;

function BookList() {
  const { loading, error, data } = useQuery(GET_BOOKS);
  console.log(loading);
  console.log(error);
  console.log(data);

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

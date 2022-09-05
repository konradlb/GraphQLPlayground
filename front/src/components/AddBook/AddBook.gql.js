import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  query getAuthors {
    authors {
      name
      id
    }
  }
`;

export const ADD_BOOK = gql`
  mutation ($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

export default {
  GET_AUTHORS,
  ADD_BOOK,
};

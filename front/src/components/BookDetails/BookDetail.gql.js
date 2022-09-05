import { gql } from "@apollo/client";

export const GET_BOOK = gql`
  query ($id: ID!) {
    book(id: $id) {
      name
      id
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export default {
  GET_BOOK,
};

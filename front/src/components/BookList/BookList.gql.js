import { gql } from "@apollo/client";

export const GET_BOOKS = gql`
  query getBooks {
    books {
      name
      id
    }
  }
`;

export default {
  GET_BOOKS,
};

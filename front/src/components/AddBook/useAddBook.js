import { useState, useMemo, useCallback } from "react";
import { useQuery, useMutation } from "@apollo/client";

import queries from "./AddBook.gql";
import { GET_BOOKS } from "../BookList/BookList.gql";

export const useAddBook = () => {
  const [name, setName] = useState(undefined);
  const [genre, setGenre] = useState(undefined);
  const [authorId, setAuthorId] = useState(undefined);

  const { data: authorsData, error: authorsError } = useQuery(
    queries.GET_AUTHORS
  );

  const [addBookMutation] = useMutation(queries.ADD_BOOK);

  const { authors } = useMemo(() => {
    return {
      authors: authorsError || !authorsData ? [] : authorsData.authors,
    };
  }, [authorsError, authorsData]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeGenre = (e) => {
    setGenre(e.target.value);
  };
  const onChangeAuthorId = (e) => {
    setAuthorId(e.target.value);
  };

  const onSubmitForm = useCallback(
    (e) => {
      try {
        e.preventDefault();
        const variables = {
          name,
          genre,
          authorId,
        };
        addBookMutation({
          variables,
          refetchQueries: [{ query: GET_BOOKS }],
          awaitRefetchQueries: true,
        });
      } catch {
        //}
      }
    },
    [addBookMutation, authorId, genre, name]
  );

  return {
    authors,
    name,
    genre,
    authorId,
    onChangeName,
    onChangeGenre,
    onChangeAuthorId,
    onSubmitForm,
  };
};

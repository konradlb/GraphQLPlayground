import { useMemo } from "react";
import { useQuery } from "@apollo/client";

import queries from "./BookDetail.gql";

export const useBookDetail = () => {
  const { data: bookDetailsData, error: bookDetailsError } = useQuery(
    queries.GET_BOOK
  );

  const { bookDetails } = useMemo(() => {
    return {
      bookDetails:
        bookDetailsError || !bookDetailsData ? null : bookDetailsData,
    };
  }, [bookDetailsError, bookDetailsData]);

  return {
    bookDetails,
  };
};

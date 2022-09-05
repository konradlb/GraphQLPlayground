import { useMemo } from "react";

import { useAddBook } from "./useAddBook";

function AddBook() {
  const {
    authors,
    onChangeName,
    onChangeGenre,
    onChangeAuthorId,
    onSubmitForm,
  } = useAddBook();

  const authorsOptions = useMemo(() => {
    return authors.map((author) => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }, [authors]);

  return (
    <div>
      <form id="add-book" onSubmit={onSubmitForm}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={onChangeName} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={onChangeGenre} />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={onChangeAuthorId}>
            <option>Select author</option>
            {authorsOptions}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  );
}

export default AddBook;

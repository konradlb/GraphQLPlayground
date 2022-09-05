import "./App.css";

import BookList from "./components/BookList/BookList";
import AddBook from "./components/AddBook/AddBook";

function App() {
  return (
    <div className="App">
      <h1>Welcome </h1>
      <BookList />
      <AddBook />
    </div>
  );
}

export default App;

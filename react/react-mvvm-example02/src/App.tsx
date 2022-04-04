import './App.css';

import BookView from '@view/BookView';
import BookModel from "@model/BookModel";
import BookViewModel from '@viewModel/BookViewModel';

function App() {
  const bookModel = new BookModel();
  const bookViewModel = new BookViewModel(bookModel);

  return (
      <BookView viewModel={bookViewModel} />
  );
}

export default App;

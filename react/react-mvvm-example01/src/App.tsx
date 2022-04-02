import './App.css';
import React from 'react';
import BooksProvider from '@provider/BooksProvider';

function App() {
  return (
    <div>
      <BooksProvider />
    </div>
  );
}

export default App;

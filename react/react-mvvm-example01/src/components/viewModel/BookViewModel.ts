import { BookModelInterface, BooksType } from '@model/BookModel';

export interface BookViewModelInterface {
    store: BookModelInterface;
    getBooks: () => BooksType;
    toggleFavorite: (bookId: string) => void;
}

class BookViewModel implements BookViewModelInterface {
    store: BookModelInterface;
    constructor(bookStore: BookModelInterface) {
        this.store = bookStore
    }

    getBooks() {
        return this.store.getBooks()
    }

    toggleFavorite(bookId: string) {
        this.store.toggleFavorite(bookId)
    }
}

export default BookViewModel
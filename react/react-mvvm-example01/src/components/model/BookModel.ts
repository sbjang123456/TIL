export interface BookInterface {
    id: string;
    name: string;
    isFavorite: boolean;
}

export type BooksType = BookInterface[];

export interface BookModelInterface {
    books: BooksType;
    getBooks: () => BooksType;
    toggleFavorite: (bookId: string) => void;
}
class BookModel implements BookModelInterface {
    books: BooksType;
    constructor() {
        this.books = [
            {id: 'RCB-123', name: "React Cook Book", isFavorite: false},
            {id: 'VCB-123', name: "Vue Cook Book", isFavorite: false},
            {id: 'ACB-123', name: "Angular Cook Book", isFavorite: false}
        ];
    }

    getBooks() {
        return this.books
    }

    toggleFavorite(bookId: string) {
        const target = this.books.filter(item => item.id === bookId)[0];
        target.isFavorite = !target.isFavorite
    }
}

export default BookModel;
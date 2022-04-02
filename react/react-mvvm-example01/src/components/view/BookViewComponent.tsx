import { BooksType } from '@model/BookModel';

interface BookViewInterface {
    books: BooksType;
    handleToggleFavorite: (bookId: string) => void;
}

const BookViewComponent = ({books, handleToggleFavorite}: BookViewInterface) => {
    return (
        <>
            <h2>Book List</h2>
            <div>
                {books.map(book => (
                    <div key={`book-${book.id}`}>
                        {book.id} / {book.name} / {book.isFavorite.toString()}
                        <button onClick={() => handleToggleFavorite(book.id)}>button</button>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BookViewComponent;
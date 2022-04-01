import { useCallback } from 'react';
import { BookViewModelInterface } from '@viewModel/BookViewModel';
import BookViewComponent from '@view/BookViewComponent';

interface BookViewControllerComponent {
    viewModel: BookViewModelInterface;
}

const BookViewControllerComponent = ({ viewModel }: BookViewControllerComponent) => {
    const handleToggleFavorite = useCallback((bookId) => {
        viewModel.toggleFavorite(bookId)
    }, [viewModel]);

    return (
        <BookViewComponent
            books={viewModel.getBooks()}
            handleToggleFavorite={handleToggleFavorite}
        />
    )
}

export default BookViewControllerComponent;
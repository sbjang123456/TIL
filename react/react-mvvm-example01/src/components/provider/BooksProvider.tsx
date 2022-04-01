import { useState } from 'react';
import BookViewControllerComponent from "@controller/BookViewControllerComponent";
import BookModel from '@model/BookModel';
import BookViewModel from '@viewModel/BookViewModel';

const BooksProvider = () => {
    const model = new BookModel()
    const [viewModel] = useState(new BookViewModel(model))

    return (
        <BookViewControllerComponent viewModel={viewModel} />
    )
}

export default BooksProvider;
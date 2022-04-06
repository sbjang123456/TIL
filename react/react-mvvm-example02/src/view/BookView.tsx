import { useState } from 'react';
import BookViewModel from '@viewModel/BookViewModel';

interface BookViewInterface {
    viewModel: BookViewModel;
}
const BookView = ({ viewModel }: BookViewInterface) => {
    const [ renderFlag, setRenderFlag ] = useState(true);
    let books = viewModel.getAll();

    const handleRemove = (idx: number) => () => {
        viewModel.remove(idx);
        setRenderFlag(!renderFlag);
    };

    return (
        <>
            <div className="form">
                <input type="text" placeholder="검색" />
                <button className="read">검색</button>
                <button className="create">등록</button>
            </div>

            <div className="list">
                <ul>
                    {books.map((book, idx) => (
                        <li key={idx}>
                            <span>{book.author} - [{book.name}]</span>
                            <button
                                onClick={handleRemove(idx)}
                                style={{ color: 'red' }}
                            >
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
};

export default BookView;
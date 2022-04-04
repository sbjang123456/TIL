export interface BookInterface {
    name: string;
    author: string;
}

interface BookModelInterface {
    add: (book: BookInterface) => void;
    remove: (idx: number) => BookInterface|undefined;
    update: (idx: number, book: BookInterface) => void;
    get: (idx: number) => BookInterface;
    getAll: () => BookInterface[];
}

export default class BookModel implements BookModelInterface {
    books: BookInterface[];
    constructor() {
        this.books = [
            {
                name: '파이썬으로 배우는 웹 크롤러',
                author: '박정태'
            },
            {
                name: '자바스크립트로 서버와 클라이언트 구축하기',
                author: '박정태'
            },
            {
                name: '블록체인 프로젝트트',
                author: '박정태'
            }
        ]
    }

    add(book: BookInterface) {
        this.books.push(book);
    }

    remove(idx: number) {
        let temp = this.books[idx];

        this.books[idx] = this.books[this.books.length - 1];
        this.books[this.books.length - 1] = temp;

        return this.books.pop();
    }

    update(idx: number, book: BookInterface) {
        this.books[idx] = book;
    }

    get(idx: number) {
        return this.books[idx];
    }

    getAll() {
        return this.books;
    }

}

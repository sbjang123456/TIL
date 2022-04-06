import BookModel from '@model/BookModel';

export default class BookViewModel {
    model: BookModel;
    constructor(model: BookModel) {
        this.model = model;
    }

    getAll() {
        return this.model.getAll();
    }

    get(idx: number) {
        return this.model.get(idx);
    }

    remove(idx: number) {
        return this.model.remove(idx);
    }
}
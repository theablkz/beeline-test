const AddNewQuotes = `Для добавления новых цитат удалите одну из добавленных`;

export class Quote {
  constructor(storage, max = 10) {
    this._storage = new storage();
    this._quotes = this._storage.getQuotes().slice(0, max);
    this._max = max;
    this._errors = [];
  }
  getDetail() {
    return {
      len: this._quotes.length,
      max: this._max
    };
  }
  getData() {
    return this._quotes;
  }

  setItem(item) {
    if (this._max <= this._quotes.length) {
      const errors = [
        ...this._errors,
        {
          message: AddNewQuotes,
          deleter: () => {
            setTimeout(() => {
              this._errors.splice(0, 1);
            }, 2000);
          }
        }
      ];
      this._errors = errors;
    } else {
      this._quotes = [...this._quotes, item];
      this._storage.setQuote(this._quotes);
    }
  }
  deleteItem(index) {
    this._quotes.splice(index, 1);
    this._storage.setQuote(this._quotes);
  }
}

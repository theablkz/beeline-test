export class LocalStorage {
  constructor() {
    this._store = JSON.parse(localStorage.quotes || "[]") || [];
  }

  getQuotes() {
    return this._store;
  }
  setQuote(values) {
    localStorage.quotes = JSON.stringify(values);
  }
}

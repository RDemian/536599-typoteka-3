'use strict';

class CategoryService {
  constructor(articles) {
    this._articles = articles;
  }

  findAll() {
    const categories = this._articles.reduce((acc, article) => {
      article.сategories.forEach((elem) => {
        acc.add(elem);
      });
      return acc;
    }, new Set());
    return [...categories];
  }
}

module.exports = CategoryService;

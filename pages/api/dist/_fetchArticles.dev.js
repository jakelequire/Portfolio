"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = importArticles;
exports.createArticle = createArticle;

var _axios = _interopRequireDefault(require("axios"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Sends a `GET` request to the server to get all articles.
 * @param {string} prop - A string to filter articles by. If no string is provided, all articles are returned.
 * 
 * @returns {Promise} A promise that resolves to an array of articles.
 */
function importArticles(prop) {
  var url, response, articles, articleObject;
  return regeneratorRuntime.async(function importArticles$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = prop ? "http://localhost:3001/articles?query=".concat(prop) : 'http://localhost:3001/articles';
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(url));

        case 3:
          response = _context.sent;
          articles = response.data;
          articleObject = articles.map(function (article) {
            var id = article.id,
                title = article.title,
                description = article.description,
                date = article.date,
                tags = article.tags,
                category = article.category,
                image = article.image,
                imageAlt = article.imageAlt,
                content = article.content;
            return new createArticle(id, title, description, date, tags, category, image, imageAlt, content);
          });
          return _context.abrupt("return", articleObject);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}
/**
 * Represents the format of an article.
 * @param {string} id
 * @param {string} title
 * @param {string} description
 * @param {string} date
 * @param {string[]} tags
 * @param {string} category
 * @param {string} image
 * @param {string} imageAlt
 * @param {string} content
 * @returns {Object} An article object.
 */


function createArticle(id, title, description, date, tags, category, image, imageAlt, content) {
  this.id = id;
  this.title = title;
  this.description = description;
  this.date = date;
  this.tags = tags;
  this.category = category;
  this.image = image;
  this.imageAlt = imageAlt;
  this.content = content;
}

createArticle.propTypes = {
  id: _propTypes["default"].string.isRequired,
  title: _propTypes["default"].string.isRequired,
  description: _propTypes["default"].string.isRequired,
  date: _propTypes["default"].string.isRequired,
  tags: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  category: _propTypes["default"].string.isRequired,
  image: _propTypes["default"].string.isRequired,
  imageAlt: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].string.isRequired
};
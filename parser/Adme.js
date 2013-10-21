var Parser = require('./Parser');

module.exports = Parser.extend({
	PLUS: '+',
	MINUS: '-',
	SELECTOR_COMMENT: '.comment-block',
	SELECTOR_RANK: '.comment-rating-good,.comment-rating-bad',
	SELECTOR_TEXT: '.comment-content > p',
	SELECTOR_URL: false,
	SELECTOR_AUTOR: 'a.comment-theme span',
	parseUrl: function(node) {
		if (!node) {
			return '';
		}
		var id = node.getAttribute('id');
		if (!id) {
			return '';
		}
		return '#' + id;
	}
});
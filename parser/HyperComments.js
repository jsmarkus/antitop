var Parser = require('./Parser');

module.exports = Parser.extend({
    PLUS: '+',
    MINUS: '-',
    SELECTOR_COMMENT: '.hc_message',
    SELECTOR_RANK: '.e_hc_voting',
    SELECTOR_TEXT: '.hc_message_text .hc_text',
    SELECTOR_URL: '.hc_text.e_hc_text',
    SELECTOR_AUTOR: '.hc_comments_nick',
	parseUrl: function(node) {
		if (!node) {
			return '';
		}
		var id = node.getAttribute('id');
		if(!id) {
			return '';
		}
		return '#' + id;
	},
});
var boop = require('boop');

module.exports = boop.extend({

    PLUS: '+',
    MINUS: '-',
    SELECTOR_COMMENT: null,
    SELECTOR_RANK: null,
    SELECTOR_TEXT: null,
    SELECTOR_URL: null,
    SELECTOR_AUTOR: null,

	initialize: function (root) {
		this.body = root;
	},

	parse: function() {
		var nComments = this.body.querySelectorAll(this.SELECTOR_COMMENT);
		var results = [];
		for (var i = 0; i < nComments.length; i++) {
			var nComment = nComments[i];

			var nRank   = this.SELECTOR_RANK  ? nComment.querySelector(this.SELECTOR_RANK)  : nComment;
			var nText   = this.SELECTOR_TEXT  ? nComment.querySelector(this.SELECTOR_TEXT)  : nComment;
			var nLink   = this.SELECTOR_URL   ? nComment.querySelector(this.SELECTOR_URL)   : nComment;
			var nAuthor = this.SELECTOR_AUTOR ? nComment.querySelector(this.SELECTOR_AUTOR) : nComment;

			var iRank   = this.parseRank  (nRank  );
			var sText   = this.parseText  (nText  );
			var sUrl    = this.parseUrl   (nLink  );
			var sAuthor = this.parseAuthor(nAuthor);

			results.push({
				rank: iRank,
				text: sText,
				url: sUrl,
				author: sAuthor
			});
		}

		return results;
	},

	parseUrl: function(node) {
		if (!node) {
			return '';
		}
		return node.getAttribute('href');
	},

	parseRank: function(node) {
		if (!node) {
			return 0;
		}
		return parseInt(('' + node.textContent)
			.replace(this.PLUS, '+')
			.replace(this.MINUS, '-'), 10) || 0;
	},

	parseText: function(node) {
		if (!node) {
			return '';
		}
		return ('' + node.textContent).trim();
	},

	parseAuthor: function(node) {
		if (!node) {
			return '';
		}
		return ('' + node.textContent).trim();
	}

});
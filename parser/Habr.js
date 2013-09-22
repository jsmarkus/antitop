var Parser = module.exports = function(body) {
	this.body = body;
};

var proto = Parser.prototype;

proto.PLUS = '+';
proto.MINUS = '–';
proto.SELECTOR_COMMENT = '.comment_body';
proto.SELECTOR_RANK = '.voting .score';
proto.SELECTOR_TEXT = '.message';

proto.parse = function() {
	var nComments = this.body.querySelectorAll(this.SELECTOR_COMMENT);
	var results = [];
	for (var i = 0; i < nComments.length; i++) {
		var nComment = nComments[i];

		var nRank = nComment.querySelector(this.SELECTOR_RANK);
		var nText = nComment.querySelector(this.SELECTOR_TEXT);

		var iRank = this.parseRank(nRank);
		var sText = this.parseText(nText);
		console.log(iRank, sText);

		results.push({
			rank : iRank,
			text : sText
		});
	}

	return results;
};

proto.parseRank = function(node) {
	return parseInt(('' + node.innerText)
		.replace(this.PLUS, '+')
		.replace(this.MINUS, '-'), 10);
};

proto.parseText = function(node) {
	return ('' + node.innerText).trim();
};
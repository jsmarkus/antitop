var Parser = module.exports = function(body) {
    this.body = body;
};

var proto = Parser.prototype;

proto.PLUS = '+';
proto.MINUS = '–';
proto.SELECTOR_COMMENT = '.comment_body';
proto.SELECTOR_RANK = '.voting .score';
proto.SELECTOR_TEXT = '.message';
proto.SELECTOR_URL = '.link_to_comment';
proto.SELECTOR_AUTOR = '.info .username';

proto.parse = function() {
    var nComments = this.body.querySelectorAll(this.SELECTOR_COMMENT);
    var results = [];
    for (var i = 0; i < nComments.length; i++) {
        var nComment = nComments[i];

        var nRank = nComment.querySelector(this.SELECTOR_RANK);
        var nText = nComment.querySelector(this.SELECTOR_TEXT);
        var nLink = nComment.querySelector(this.SELECTOR_URL);
        var nAuthor = nComment.querySelector(this.SELECTOR_AUTOR);

        var iRank = this.parseRank(nRank);
        var sText = this.parseText(nText);
        var sUrl = this.parseUrl(nLink);
        var sAuthor = this.parseAuthor(nAuthor);
        // console.log(iRank, sText);

        results.push({
            rank   : iRank,
            text   : sText,
            url    : sUrl,
            author : sAuthor
        });
    }

    return results;
};

proto.parseUrl = function(node) {
    if(!node) {
        return '';
    }
    return node.getAttribute('href');
};

proto.parseRank = function(node) {
    if(!node) {
        return 0;
    }
    return parseInt(('' + node.innerText)
        .replace(this.PLUS, '+')
        .replace(this.MINUS, '-'), 10);
};

proto.parseText = function(node) {
    if(!node) {
        return '';
    }
    return ('' + node.innerText).trim();
};

proto.parseAuthor = function(node) {
    if(!node) {
        return '';
    }
    return ('' + node.innerText).trim();
};
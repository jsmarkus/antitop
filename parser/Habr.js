var Parser = require('./Parser');

module.exports = Parser.extend({
    PLUS: '+',
    MINUS: '–',
    SELECTOR_COMMENT: '.comment_body',
    SELECTOR_RANK: '.voting .score',
    SELECTOR_TEXT: '.message',
    SELECTOR_URL: '.link_to_comment',
    SELECTOR_AUTOR: '.info .username'
});
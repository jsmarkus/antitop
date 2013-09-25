var Parser = require('./Parser');

module.exports = Parser.extend({
    PLUS: '+',
    MINUS: '-',
    SELECTOR_COMMENT: '.comment_inner',
    SELECTOR_RANK: '.vote_result',
    SELECTOR_TEXT: '.c_body',
    SELECTOR_URL: '.c_footer .c_icon',
    SELECTOR_AUTOR: '.c_footer .c_user'
});
var Parser = require('./Parser');

module.exports = Parser.extend({
    PLUS: '+',
    MINUS: '-',
    SELECTOR_COMMENT: '.idc-c',
    SELECTOR_RANK: '.idc-v-total',
    SELECTOR_TEXT: '.idc-c-t .idc-c-t-inner',
    SELECTOR_URL: '.IDCommentTime',
    SELECTOR_AUTOR: '.idc-c-h .idc-i span'
});
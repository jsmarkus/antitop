var MAX_TRIES = 50;
var INTERVAL = 2000;

module.exports = function waitDOM(root, selector, onSuccess) {
    var timer = setInterval(check, INTERVAL);
    var i = 0;

    function check() {
        if(root.querySelector(selector)) {
            clearInterval(timer);
            onSuccess();
            return;
        }

        if(++i >= MAX_TRIES) {
            clearInterval(timer);
        }
    }
};
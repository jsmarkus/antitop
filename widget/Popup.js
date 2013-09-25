var D = require('dual');

var CLASS_MAIN = 'atop-popup yui3-cssreset';
var CLASS_OPEN = 'atop-popup-open';
var CLASS_CLOSED = 'atop-popup-closed';
var CLASS_THEME_PREFIX = 'atop-popup-theme_';


var Popup = D.Widget.extend({
    initStructure : function () {
        this.$ = D.fromJSON([
            'div', {
                class: CLASS_MAIN,
                'ui:asset':'content'
            }
        ]);
    },

    applyAttribute_open: function (value) {
        if(value) {
            this.assets.content.addClass(CLASS_OPEN);
            this.assets.content.removeClass(CLASS_CLOSED);
        } else {
            this.assets.content.removeClass(CLASS_OPEN);
            this.assets.content.addClass(CLASS_CLOSED);
        }
    },

    applyAttribute_theme: function (value) {
        var cssclass = CLASS_THEME_PREFIX + value;
        this.assets.content.addClass(cssclass);
    },

    setList: function (list) {
        this.assets.content.appendChild(list);
    },

    open: function () {
        this.setAttribute('open', true);
    },

    close: function () {
        this.setAttribute('open', false);
    },

    setTheme: function (theme) {
        this.setAttribute('theme', theme);
    },

    ready: function () {
        this.close();
        this.assets.content.listenTo('click');
        this.assets.content.on('dom.click', function (e) {
            e.stopPropagation();
            this.open();
        }.bind(this));
    }
});

module.exports = Popup;
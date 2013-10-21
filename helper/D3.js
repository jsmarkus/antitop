exports.expandCollapsedComments = function() {
    var heightHidden = document.querySelectorAll('.b-comments_collapsed_comments');
    var classHidden = document.querySelectorAll('.b-comments_collapsed');

    for (var i = 0; i < heightHidden.length; i++) {
        heightHidden[i].style.maxHeight = 'none';
    }

    for (var i = 0; i < classHidden.length; i++) {
        classHidden[i].classList.add('b-comments_collapsed_expanded');
    }

    // $('.b-comments_collapsed_comments')
    //     .css('max-height', 'none');

    // $('.b-comments_collapsed')
    //     .addClass('b-comments_collapsed_expanded');
};
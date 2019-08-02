$(
function() {

    var previous = 'first load';
    var current = null;

    var aud = $('audio')[0];
    $('#ppbutton').on('click', function() {
        // if (aud.paused) {
        if (aud.muted) {
            aud.muted = false;
            $('#ppbutton').removeClass('fas fa-play');
            $('#ppbutton').addClass('fas fa-pause');
            location.hash = '#play';
        }
        else {
            // aud.pause();
            aud.muted = true;
            $('#ppbutton').removeClass('fas fa-pause');
            $('#ppbutton').addClass('fas fa-play');
            location.hash = '#pause';
        }
    });

});

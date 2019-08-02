$(
  function(){

var previous = 'first load';
var current = null;

songinfo();

setInterval(function() {
	songinfo();
}, 3000);

function songinfo(){
}

var aud = $('audio')[0];
$('#ppbutton').on('click', function(){
	if (aud.paused) {
		aud.play();
		$('#ppbutton').removeClass('fas fa-play');
		$('#ppbutton').addClass('fas fa-pause');
		location.hash = '#play';
	}
	else {
		aud.pause();
		$('#ppbutton').removeClass('fas fa-pause');
		$('#ppbutton').addClass('fas fa-play');
		location.hash = '#stop';
	}
});

});

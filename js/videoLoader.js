$(document).ready(function(){
  $('video').on('ended',function(){
    $('#video-player').fadeOut(250, function() {
      $('.buttons').fadeIn();
    });
    $('body').on();
  });
});
$(".video-file").on('click', function(e) {
  e.preventDefault();
  var filename = $(this).attr('id');
  playFile(filename + '.mp4');
});
function playFile(name) {
  $('.buttons').fadeOut(250,function() {
    $('#video-player').fadeIn();
  });
  var video = $("#video-player");
  video[0].src = name;
  video[0].load();
  video[0].play();
  $('body').off();
};

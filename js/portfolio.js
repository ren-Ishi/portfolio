var cursor = document.getElementById('cursor'); 
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

$('a[href*="#"]').click(function () {
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top-100;
    $('body,html').animate({scrollTop: pos}, 500);
    return false;
  });

  $(function(){
    $("#box img").click(function() {
      $("#graydisplay").html($(this).prop('outerHTML'));
      $("#graydisplay").fadeIn(200);
    });
    $("#graydisplay, #graydisplay img").click(function() {
      $("#graydisplay").fadeOut(200);
    });
  });
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
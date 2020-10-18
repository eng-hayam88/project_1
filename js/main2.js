$num = $('.curso-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.curso-card:nth-child(' + $even + ')').addClass('active');
  $('.curso-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.curso-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.curso-card:nth-child(' + $odd + ')').addClass('active');
  $('.curso-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.curso-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.curso-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.mycard-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.mycard-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});
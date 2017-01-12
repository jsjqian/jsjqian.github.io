$(function(){  
  $('#titles1').hide().fadeIn(1000);

  $('.fa').hide().fadeIn(2500).animate({
    'top': '10%'
    }, {duration: 2000, queue: false}, function() {
    });
});

$(function () {
  var $els = $('div[id^=titles]'),
    i = 0,
    len = $els.length;

  $els.slice(1).hide();
  setInterval(function () {
    $els.eq(i).fadeOut(function () {
      i = (i + 1) % len
      $els.eq(i).fadeIn(1000);
    })
  }, 3000)
})

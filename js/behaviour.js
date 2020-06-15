(function($) {
  var $body = $('body');
  var $btn = $('.toggle_btn');
  var $mask = $('#mask');
  var open = 'open'; // class
  // menu open close
  $btn.on('click', function() {
    if (!$body.hasClass(open)) {
      $body.addClass(open);
    } else {
      $body.removeClass(open);
    }
  });
  // mask close
  $mask.on('click', function() {
    $body.removeClass(open);
  });
})(jQuery);

jQuery(function() {
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function() {
    if ($(this).scrollTop() > 500) { //100pxスクロールしたら
      // console.log("発火");
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '16px' //右から0pxの位置に
        }, 300); //0.3秒かけて現れる
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-50px' //右から-50pxの位置に
        }, 300); //0.3秒かけて隠れる
      }
    }
  });
  pagetop.click(function() {
    $('body, html').animate({
      scrollTop: 0
    }, 500); //0.5秒かけてトップへ戻る
    return false;
  });
});

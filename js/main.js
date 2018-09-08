jQuery(document).ready(function ($) {
    var fullpage = $("#fullpage")
    fullpage.fullpage({
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      onLeave: function (index, direction) {
        //alert("Kristina is good!");
        console.log(index);
        var $isAnimatedLeft = $('#left');
        var $isAnimatedCenter = $('#center');
        var $isAnimatedRight = $('#right');
        var $isAnimatedBottom = $('#bottom');

        if (index.index == 0) {
          $isAnimatedLeft.addClass('animated fadeInLeftBig');
          $isAnimatedCenter.addClass('animated fadeInUpBig');
          $isAnimatedRight.addClass('animated fadeInRightBig');
          $isAnimatedBottom.addClass('animated zoomIn');
          $isAnimatedBottom.eq(0).css('animation-delay', '.30s');
        }
      }
    });
  })


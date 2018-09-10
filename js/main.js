jQuery(document).ready(function ($) {
    var fullpage = $("#fullpage")
    fullpage.fullpage({
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors:['firstPage', 'secondPage', 'thirdPage'],
      navigation:true,
      
      onLeave: function (index, direction) {
        var $isAnimatedLeft = $('#left');
        var $isAnimatedCenter = $('#center');
        var $isAnimatedRight = $('#right');
        var $isAnimatedBottom = $('#bottom');
        if (index.index == 0) {
          $isAnimatedLeft.addClass('animated fadeInLeftBig').css('animation-delay', '0.3s');
          $isAnimatedCenter.addClass('animated fadeInUpBig');
          $isAnimatedRight.addClass('animated fadeInRightBig').css('animation-delay', '0.6s');
          $isAnimatedBottom.addClass('animated zoomIn').css('animation-delay', '1.2s');
        }
        if (index.index == 1) {
          $('#example').addClass('animated zoomIn').css('animation-delay', '0.3s');
        }
      }
    });
  })
  

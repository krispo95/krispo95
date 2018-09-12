jQuery(document).ready(function ($) {
    var fullpage = $("#fullpage")
    fullpage.fullpage({
      licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
      anchors:['firstPage', 'secondPage', 'thirdPage'],
      navigation:true,
      
      onLeave: function (index, nextIndex, direction) {
        var $isAnimatedLeft = $('#left');
        var $isAnimatedCenter = $('#center');
        var $isAnimatedRight = $('#right');
        var $isAnimatedBottom = $('#bottom');
        if (index.index == 0 && direction == "down") {
          $isAnimatedLeft.addClass('animated fadeInLeftBig').css('animation-delay', '0.3s');
          $isAnimatedCenter.addClass('animated fadeInUpBig');
          $isAnimatedRight.addClass('animated fadeInRightBig').css('animation-delay', '0.6s');
          $isAnimatedBottom.addClass('animated zoomIn').css('animation-delay', '1.2s');
        }
        else if (index.index==2 && direction=="up"){
          $isAnimatedLeft.removeClass('fadeInLeftBig fadeInLeft');
          $isAnimatedLeft.addClass('fadeInLeft').css('animation-delay', '0.4s');
          $isAnimatedCenter.removeClass('fadeInUpBig fadeInDown');
          $isAnimatedCenter.addClass(' fadeInDown').css('animation-delay', '0.4s');
          $isAnimatedRight.removeClass('fadeInRightBig fadeInRight ');
          $isAnimatedRight.addClass('fadeInRight').css('animation-delay', '0.4s');
          $isAnimatedBottom.removeClass('zoomIn fadeInDown');
          $isAnimatedBottom.addClass('fadeInDown').css('animation-delay', '0.4s');
        }
        // else if ((index.index == 2 && ) && nextIndex.index == 2) {
        //   // $('#example').addClass('animated zoomIn').css('animation-delay', '0.4s');

        // }
      }
    });
  })
  

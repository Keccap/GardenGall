$(function() {

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


$('.adv-item p').matchHeight();
$('.adv-item h3').matchHeight();
$('.direct-item h3').matchHeight();
$('.direct-item').matchHeight();



$('.works-wrap, .project-wrap').magnificPopup({
    type: 'inline',
    delegate: "a",
    fixedContentPos: true,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });


$('.button-form').magnificPopup({
    type: 'inline',
    fixedContentPos: true,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });




$('.carousel-person-wrap').owlCarousel({
  margin: 30,
  autoplay: true,
  autoplaySpeed: 1000,
  autoplayHoverPause:true,
  loop: true,
  slideSpeed: 1000,
  paginationSpeed: 1000,
  rewindSpeed: 1000,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    320: {
      items: 1
    },
    480: {
      items: 2
    },
    768: {
      items: 3
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
})


$('.carousel-img-wrap').owlCarousel({
  slideSpeed: 1000,
  paginationSpeed: 1000,
  rewindSpeed: 1000,
  dots: true,
  items: 1,
  center: true
})



$(".item-works").each(function(e) {
  
  $(this).attr("href", "#works-popup-" + e)
    .find(".item-works-mfp-content").attr("id", "works-popup-" + e)
  
  
})

$(".item-project").each(function(e) {
  
  $(this).attr("href", "#project-popup-" + e)
    .find(".item-project-mfp-content").attr("id", "project-popup-" + e)
  
  
})


if ( ! Modernizr.objectfit ) {
  $('.cover-image-wrap').each(function () {
    var $container = $(this),
        imgUrl = $container.find('img.cover-image').prop('src');
    if (imgUrl) {
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('fallback');
    }  
  });
}





jQuery('.img-svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});










});








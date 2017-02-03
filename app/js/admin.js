$(".direct-item .fa-plus").click(function() {
  $(this).toggleClass("on");
  $(this).next().toggleClass("active");
  $(".direct-item").matchHeight();

});
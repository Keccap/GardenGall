$(function() {


$(".direct-item").on("click", ".button-icon-change", function() {
  $(this).toggleClass("on");
  $(this).next().next().toggleClass("active");
  $(".direct-item").matchHeight();
})



});
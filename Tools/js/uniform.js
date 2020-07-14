$(document).ready(function () {
  //Get current scroll position
  $(".toast").toast("show");
  $(".mainnav").addClass("invisible");
  $(".alert").hide();
  $(".spinner").hide();
  $(".spinner-get-pwd-link").hide();
  $(document).on("scroll", function () {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $("section");

    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];

      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });
  $(".form-body").fadeIn("slow");

  var timer;
  $(window).scroll(function () {
    var navbar = $(".mainnav");
    var navposition = navbar.offset().top;
    if (timer) {
      window.clearTimeout(timer);
      if (window.pageYOffset >= navposition) {
        navbar.removeClass("d-none").removeClass("invisible");
      } else {
        navbar.addClass("invisible");
      }
    }
    timer = setTimeout(function () {
      navbar.addClass("invisible");
    }, 10000);
  });
});

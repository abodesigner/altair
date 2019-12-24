$(document).ready(function() {
  // Get Current Year @footer
  $("#year").text(new Date().getFullYear());

  // display form search when clicking on search icon
  $("#search-icon").on("click", function() {
    $("#home-section .form-inline").slideToggle("fast");
  });

  // read more scroll down
  $("a.scroll-down").on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      { scrollTop: $("#branches-section").offset().top },
      1000,
      "linear"
    );
  });

  // initialize slick slider with customization
  var target = $(".carousel");

  target.each(function() {
    if ($(this).is(".mandatory")) {
      $(this).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows: false,
        speed: 600
      });
    } else if ($(this).is(".projects")) {
      $(this).slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        speed: 500
      });
    } else {
      $(this).slick();
    }
  });

  // get dynamic height of content
  // var headerHeight = $(".navbar").outerHeight(),
  //   footerHeight = $("footer").outerHeight(),
  //   contentHeight = $(window).outerHeight() - headerHeight - footerHeight;

  // console.log(headerHeight, footerHeight, contentHeight);
  // $("#aboutus").height(contentHeight);
});

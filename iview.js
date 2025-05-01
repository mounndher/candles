(function ($) {
  var defaults = {
    pauseTime: 7000,
    animationSpeed: 500,
    directionNav: true,
    controlNav: true,
    controlNavThumbs: false,
    autoAdvance: true,
    pauseOnHover: true,
    fx: "fade", // Default transition effect
    height: 400, // Default height of the slider
  };

  $.fn.iView = function (options) {
    var settings = $.extend({}, defaults, options);

    return this.each(function () {
      var $slider = $(this);
      var $slides = $slider.children();

      // Initialize slider
      var currentSlide = 0;
      var timer;

      function showSlide(index) {
        $slides.eq(currentSlide).fadeOut(settings.animationSpeed);
        currentSlide = index;
        $slides.eq(currentSlide).fadeIn(settings.animationSpeed);
      }

      function nextSlide() {
        var nextSlide = (currentSlide + 1) % $slides.length;
        showSlide(nextSlide);
      }

      function prevSlide() {
        var prevSlide = (currentSlide - 1 + $slides.length) % $slides.length;
        showSlide(prevSlide);
      }

      // Navigation controls
      if (settings.directionNav) {
        $slider.append(
          '<div class="iview-nav"><button class="prev">Prev</button><button class="next">Next</button></div>'
        );
        $slider.find(".prev").on("click", prevSlide);
        $slider.find(".next").on("click", nextSlide);
      }

      // Auto-advance
      if (settings.autoAdvance) {
        function startTimer() {
          timer = setInterval(nextSlide, settings.pauseTime);
        }
        function stopTimer() {
          clearInterval(timer);
        }
        $slider.on("mouseenter", stopTimer);
        $slider.on("mouseleave", startTimer);
        startTimer();
      }

      // Initial setup
      $slides.hide();
      $slides.eq(currentSlide).show();
    });
  };
})(jQuery);
$ (window).on ('load', function () {
  // on main
  let slideIndex = $ ('.slide.active').index ();
  const slideLen = $ ('.slide').length;

  function slideShow () {
    $ ('.slide').removeClass ('active').eq (slideIndex).addClass ('active');
    if (slideIndex == slideLen - 1) {
      slideIndex = 0;
    } else {
      slideIndex++;
    }
    setTimeout (slideShow, 5000);
  }
  slideShow ();
});
$ (document).ready (function () {
  //hamburger menu button toggle
  $ ('.hamburger-btn').click (function () {
    $ ('.header .nav').slideToggle ();
  });

  $ ('.header .nav').click (function () {
    if ($ (window).width () < 768) {
      $ ('.header .nav').slideToggle ();
    }
  });

  //fixed header
  $ (window).scroll (function () {
    if ($ (this).scrollTop () > 100) {
      $ ('.header').addClass ('fixed');
    } else {
      $ ('.header').removeClass ('fixed');
    }
  });

  //scrollit

  $.scrollIt ({
    topOffset: -10,
  });

  //people-filter
  peopleFilter ($ ('.filter-btn.active').attr ('data-target'));

  $ ('.filter-btn').click (function () {
    if (!$ (this).hasClass ('active')) {
      peopleFilter ($ (this).attr ('data-target'));
    }
  });

  function peopleFilter (target) {
    $ ('.filter-btn').removeClass ('active');
    $ (".filter-btn[data-target='" + target + "']").addClass ('active');
    $ ('.people-item').hide ();
    $ (".people-item[data-category='" + target + "']").fadeIn ();
  }
});

// Resizing IFRAME (Google Form)
$ ('.iframe-full-height').on ('load', function () {
  this.style.height = this.contentDocument.body.scrollHeight + 'px';
});

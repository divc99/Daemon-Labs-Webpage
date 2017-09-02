(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict

var Header = new Vue({
  el: 'header',
  data: {
    title: 'Daemon Labs',
    subtitle: 'Web Developer - Graphic Artist - User Experience Designer'
  }
})

HomePageItems =  [
  { 
    image: 'img/project/cabin.png',
    imagealt: 'Project',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Project Title',
    content: 'Use this area of the page to describe your project. The icon above is part of a free icon set by<a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    github: 'https://github.com/DaemonLab/OWP_Image_Viewer',
    date: '22nd june 2017', 
    domain: 'Software Development', 
  },
  { 
    image: 'img/project/cake.png',
    imagealt: 'Project',
    modalhref: '#projectModal2',
    modalhreftitle: 'projectModal2',
    title: 'Project Title',
    content: 'Use this area of the page to describe your project. The icon above is part of a free icon set by<a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    github: 'https://github.com/DaemonLab/OWP_Image_Viewer',
    date: '22nd june 2017', 
    domain: 'Software Development', 
  },
  { 
    image: 'img/project/circus.png',
    imagealt: 'Project',
    modalhref: '#projectModal3',
    modalhreftitle: 'projectModal3',
    title: 'Project Title',
    content: 'Use this area of the page to describe your project. The icon above is part of a free icon set by<a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    github: 'https://github.com/DaemonLab/OWP_Image_Viewer',
    date: '22nd june 2017', 
    domain: 'Software Development', 
  },

];

ProjectPageItems =  [
  { 
    image: 'img/project/cabin.png',
    imagealt: 'Project',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Project Title',
    content: 'Use this area of the page to describe your project. The icon above is part of a free icon set by<a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    github: 'https://github.com/DaemonLab/OWP_Image_Viewer',
    date: '22nd june 2017', 
    domain: 'Software Development', 
  },
  { 
    image: 'img/project/cake.png',
    imagealt: 'Project',
    modalhref: '#projectModal2',
    modalhreftitle: 'projectModal2',
    title: 'Project Title',
    content: 'Use this area of the page to describe your project. The icon above is part of a free icon set by<a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    github: 'https://github.com/DaemonLab/OWP_Image_Viewer',
    date: '22nd june 2017', 
    domain: 'Software Development', 
  },
  { 
    image: 'img/project/circus.png',
    imagealt: 'Project',
    modalhref: '#projectModal3',
    modalhreftitle: 'projectModal3',
    title: 'Project Title',
    content: 'Use this area of the page to describe your project. The icon above is part of a free icon set by<a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    github: 'https://github.com/DaemonLab/OWP_Image_Viewer',
    date: '22nd june 2017', 
    domain: 'Software Development', 
  },
  { 
    image: 'img/project/game.png',
    imagealt: 'Project',
    modalhref: '#projectModal3',
    modalhreftitle: 'projectModal3',
    title: 'Project Title',
    content: 'Use this area of the page to describe your project. The icon above is part of a free icon set by<a href="https://sellfy.com/p/8Q9P/jV3VZ/">Flat Icons</a>. On their website, you can download their free set with 16 icons, or you can purchase the entire set with 146 icons for only $12!',
    github: 'https://github.com/DaemonLab/OWP_Image_Viewer',
    date: '22nd june 2017', 
    domain: 'Software Development', 
  },

];

var About = new Vue({
  el: '#about',
  data: {
    header: 'About',
    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam massa arcu, laoreet eget leo in, pharetra tempus dolor. Mauris eu iaculis eros. Cras sed nisl quis turpis convallis mattis eget nec nulla. Fusce gravida urna sem, a cursus ante dapibus eu. Curabitur id consequat dui, quis pellentesque nisl. Praesent mollis in urna at commodo. Morbi a condimentum quam. Sed elementum ultrices pharetra. Duis suscipit odio velit, consequat dapibus dolor commodo facilisis. Maecenas massa dolor, malesuada sed aliquam sit amet, scelerisque ac odio. '
  }
})

var Project = new Vue({
  el: '#project',
  data: {
    items:HomePageItems
  }
})

var ProjectModal = new Vue({
  el: '#projectmodal',
  data: {
    items:HomePageItems
  }
})

var ProjectPP = new Vue({
  el: '#projectPP',
  data: {
    items:ProjectPageItems
  }
})

var ProjectModalPP = new Vue({
  el: '#projectmodalPP',
  data: {
    items:ProjectPageItems
  }
})

var Footer = new Vue({
  el: 'footer',
  data: {
    location: '3481 Melrose Place<br>Beverly Hills, CA 90210',
    copyright: 'Copyright &copy; Daemon Labs 2017',
    items: [
      { 
        link: '#',
        icon: 'fa fa-fw fa-facebook' 
      },
      { 
        link: '#',
        icon: 'fa fa-fw fa-envelope' 
      },
      { 
        link: '#',
        icon: 'fa fa-fw fa-github' 
      },
    ]
  }
})
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

$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

var Header = new Vue({
  el: 'header',
  data: {
    title: 'The Programming club',
    subtitle: 'Indian Institute of Technology, Indore'
  }
});

HomePageItems =  [
  { 
    image: 'img/project/cabin.png',
    imagealt: 'game1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Infinite Runner',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/sreevatsank1999/Project_M',
    date: '21st july 2017', 
    domain: 'Game Development', 
  },
  { 
    image: 'img/project/cake.png',
    imagealt: 'web1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'AI Plays Mario',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/kpan2034/MarioFlow',
    date: '21st july 2017', 
    domain: 'Machine Learning', 
  },
  { 
    image: 'img/project/circus.png',
    imagealt: 'web2',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Infinite Runner',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/sreevatsank1999/Project_M',
    date: '21st july 2017', 
    domain: 'Game Development', 
  },
];

Headmembers = [
  {
    image:"img/members/kanishkarj.jpe",
    imagealt:"kanishkarj",
    name:"Kanishkar J",
    link:"https://github.com/kanishkarj"
  },
  {
    image:"img/members/kanishkarj.jpe",
    imagealt:"kanishkarj",
    name:"Kanishkar J",
    link:"https://github.com/kanishkarj"
  },
  {
    image:"img/members/kanishkarj.jpe",
    imagealt:"kanishkarj",
    name:"Kanishkar J",
    link:"https://github.com/kanishkarj"
  },
  {
    image:"img/members/kanishkarj.jpe",
    imagealt:"kanishkarj",
    name:"Kanishkar J",
    link:"https://github.com/kanishkarj"
  },
];

members = [
  {
    image:"img/members/kanishkarj.jpe",
    imagealt:"kanishkarj",
    name:"Kanishkar J",
    domain:"Full Stack Development",
    desig:"BTech 2nd Year",
    link:"https://github.com/kanishkarj",

  },
];

ProjectPageItems =  [
    { 
      image: 'img/project/cabin.png',
      imagealt: 'game1',
      modalhref: '#projectModal1',
      modalhreftitle: 'projectModal1',
      title: 'Infinite Runner',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
      github: 'https://github.com/sreevatsank1999/Project_M',
      date: '21st july 2017', 
      domain: 'Game Development', 
    },
    { 
      image: 'img/project/cake.png',
      imagealt: 'web1',
      modalhref: '#projectModal1',
      modalhreftitle: 'projectModal1',
      title: 'AI Plays Mario',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
      github: 'https://github.com/kpan2034/MarioFlow',
      date: '21st july 2017', 
      domain: 'Machine Learning', 
    },
    { 
      image: 'img/project/circus.png',
      imagealt: 'web2',
      modalhref: '#projectModal1',
      modalhreftitle: 'projectModal1',
      title: 'Infinite Runner',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
      github: 'https://github.com/sreevatsank1999/Project_M',
      date: '21st july 2017', 
      domain: 'Game Development', 
    },
];

var About = new Vue({
  el: '#about',
  data: {
    header: 'About',
    members: Headmembers
  }
})

var AboutList = new Vue({
  el: '#aboutlist',
  data: {
    header: 'About',
    members: members
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
    location: 'Indian Institute of Technology <br> Indore',
    copyright: 'Copyright &copy; Daemon Labs 2017',
    items: [
      { 
        link: 'https://www.facebook.com/groups/485116264850626/',
        icon: 'fa fa-fw fa-facebook' 
      },
      { 
        link: 'mailto:progclub@iiti.ac.in',
        icon: 'fa fa-fw fa-envelope' 
      },
      { 
        link: 'https://github.com/DaemonLab',
        icon: 'fa fa-fw fa-github' 
      },
    ]
  }
})
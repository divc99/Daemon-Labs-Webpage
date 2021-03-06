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
    image: 'img/project/game1.png',
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
    image: 'img/project/web1.svg',
    imagealt: 'web1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Q and A forum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/Mohit-Nathrani/question-answer-site',
    date: '21st july 2017', 
    domain: 'Full Stack Development', 
  },
  { 
    image: 'img/project/software1.svg',
    imagealt: 'software1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Rave Media Player',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/kanishkarj/rave',
    date: '21st july 2017', 
    domain: 'Software Development', 
  },
];

Headmembers = [
  {
    image:"img/members/vineetshah.jpe",
    imagealt:"vineetshah",
    name:"Vineet Shah",
    link:"#"
  },
  {
    image:"img/members/mohitmohta.jpg",
    imagealt:"mohitmohta",
    name:"Mohit Mohta",
    link:"#"
  },
  {
    image:"img/members/kunalgupta.jpeg",
    imagealt:"kunalgupta",
    name:"Kunal Gupta",
    link:"#"
  },
  {
    image:"img/members/adityajain.jpe",
    imagealt:"adityajain",
    name:"Aditya Jain",
    link:"#"
  },
  {
    image:"img/members/kunalgupta.jpeg",
    imagealt:"kunalgupta",
    name:"Kunal Gupta",
    link:"#"
  },
];

WeeklyChallenges=[
  {
    date:"11th sept 2017",
    items:[
      {
        title:"Lorem Ipsum",
        subtitle:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        author:"Lipsum",
        modalhref: '#weeklychalModal1',
        modalhreftitle: 'weeklychalModal1',
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum arcu ut justo pulvinar, at placerat tortor rutrum. Pellentesque sodales est id orci elementum bibendum. In hac habitasse platea dictumst. In sagittis ut dolor a ornare. Vivamus feugiat imperdiet lorem ac lobortis. Donec mattis orci augue, accumsan pretium metus sagittis at. Phasellus mattis sagittis aliquam. Duis justo sem, semper in leo vel, gravida ullamcorper nulla. Morbi nisi orci, eleifend id sapien vehicula, venenatis ornare urna. ",
      },
      {
        title:"Lorem Ipsum",
        subtitle:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        author:"Lipsum",
        modalhref: '#weeklychalModal2',
        modalhreftitle: 'weeklychalModal2',
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum arcu ut justo pulvinar, at placerat tortor rutrum. Pellentesque sodales est id orci elementum bibendum. In hac habitasse platea dictumst. In sagittis ut dolor a ornare. Vivamus feugiat imperdiet lorem ac lobortis. Donec mattis orci augue, accumsan pretium metus sagittis at. Phasellus mattis sagittis aliquam. Duis justo sem, semper in leo vel, gravida ullamcorper nulla. Morbi nisi orci, eleifend id sapien vehicula, venenatis ornare urna. ",
      },
    ]
  },
  {
    date:"10th sept 2017",
    items:[
      {
        title:"Lorem Ipsum",
        subtitle:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        author:"Lipsum",
        modalhref: '#weeklychalModal1',
        modalhreftitle: 'weeklychalModal1',
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum arcu ut justo pulvinar, at placerat tortor rutrum. Pellentesque sodales est id orci elementum bibendum. In hac habitasse platea dictumst. In sagittis ut dolor a ornare. Vivamus feugiat imperdiet lorem ac lobortis. Donec mattis orci augue, accumsan pretium metus sagittis at. Phasellus mattis sagittis aliquam. Duis justo sem, semper in leo vel, gravida ullamcorper nulla. Morbi nisi orci, eleifend id sapien vehicula, venenatis ornare urna. ",
      },
      {
        title:"Lorem Ipsum",
        subtitle:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
        author:"Lipsum",
        modalhref: '#weeklychalModal2',
        modalhreftitle: 'weeklychalModal2',
        content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum arcu ut justo pulvinar, at placerat tortor rutrum. Pellentesque sodales est id orci elementum bibendum. In hac habitasse platea dictumst. In sagittis ut dolor a ornare. Vivamus feugiat imperdiet lorem ac lobortis. Donec mattis orci augue, accumsan pretium metus sagittis at. Phasellus mattis sagittis aliquam. Duis justo sem, semper in leo vel, gravida ullamcorper nulla. Morbi nisi orci, eleifend id sapien vehicula, venenatis ornare urna. ",
      },
    ]
  },
]

members = [
  {
    image:"img/members/vineetshah.jpe",
    imagealt:"vineetshah",
    name:"Vineet Shah",
    domain:"Competitive Coding",
    desig:"BTech 3nd Year",
    link:"#"
  },
  {
    image:"img/members/mohitmohta.jpg",
    imagealt:"mohitmohta",
    name:"Mohit Mohta",
    domain:"Software Development",
    desig:"BTech 3nd Year",
    link:"#"
  },
  {
    image:"img/members/kunalgupta.jpeg",
    imagealt:"kunalgupta",
    name:"Kunal Gupta",
    domain:"Web Security",
    desig:"BTech 3nd Year",
    link:"#"
  },
  {
    image:"img/members/adityajain.jpe",
    imagealt:"adityajain",
    name:"Aditya Jain",
    domain:"Machine Learning",
    desig:"BTech 3nd Year",
    link:"#"
  },
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
    image: 'img/project/game1.png',
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
    image: 'img/project/web1.svg',
    imagealt: 'web1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Q and A forum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/Mohit-Nathrani/question-answer-site',
    date: '21st july 2017', 
    domain: 'Full Stack Development', 
  },
  { 
    image: 'img/project/software1.svg',
    imagealt: 'software1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Rave Media Player',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/kanishkarj/rave',
    date: '21st july 2017', 
    domain: 'Software Development', 
  },
  { 
    image: 'img/project/web2.svg',
    imagealt: 'web1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Local Quora',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/Harsh860/IITI-SOC',
    date: '21st july 2017', 
    domain: 'Full Stack Development', 
  },
  { 
    image: 'img/project/web3.svg',
    imagealt: 'web1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Query',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/kpranav1998/soc-project',
    date: '21st july 2017', 
    domain: 'Full Stack Development', 
  },
  { 
    image: 'img/project/software2.svg',
    imagealt: 'Software2',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Javafx Media Player',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/eltoro007/MediaPlayer',
    date: '21st july 2017', 
    domain: 'Software Development', 
  },
  { 
    image: 'img/project/ml1.svg',
    imagealt: 'ml1',
    modalhref: '#projectModal1',
    modalhreftitle: 'projectModal1',
    title: 'Computer learns to play mario.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rutrum convallis felis, id ultrices ipsum egestas et. Vestibulum eu consequat est. Pellentesque ultrices varius vestibulum. Ut eget massa nisi. Vestibulum augue enim, imperdiet rutrum libero a, feugiat tristique velit. Aliquam sollicitudin sit amet neque et aliquam. Aliquam vestibulum orci in elit lacinia, a suscipit libero euismod.',
    github: 'https://github.com/Mohit-Nathrani/question-answer-site',
    date: '21st july 2017', 
    domain: 'Machine Learning', 
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

var weeklychal = new Vue({
  el: '#weeklychal',
  data: {
    items:WeeklyChallenges[1].items
  }
})

var weeklychalmodal = new Vue({
  el: '#weeklychalmodal',
  data: {
    items:WeeklyChallenges[1].items
  }
})

var weeklychalWCP = new Vue({
  el: '#weeklychalWCP',
  data: {
    items:WeeklyChallenges
  }
})

var weeklychalmodalWCP = new Vue({
  el: '#weeklychalmodalWCP',
  data: {
    items:WeeklyChallenges[1].items
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
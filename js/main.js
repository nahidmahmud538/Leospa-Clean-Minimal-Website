//Menu
function mobileMenu() {
    var x = document.getElementById("nav-menu");
    if (x.className === "header-menu-wrapper") {
      x.className += " responsive";
    } else {
      x.className = "header-menu-wrapper";
    }
  }


//Feature Items Carousel
$('.feature-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        768:{
            items: 3
        },
        1000:{
            items:4
        }
    }
})

//Testimonial Carousel
$('.testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
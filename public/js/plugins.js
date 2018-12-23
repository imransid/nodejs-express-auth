//counterup section double slide carousel plugin set up starts

$(document).ready(function() {
 
 
 
 
 
  $("#double-carousel").owlCarousel({
 
      autoPlay: 4000, //Set AutoPlay to 4 seconds
      items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2]
 
  });
  
  
  
  
  
  
  
  //isotop activation code start
  
  $(window).load(function(){
    var $container = $('.portfolio-items');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolio-filter li').click(function(){
        $('.portfolio-filter .current').removeClass('current');
        $(this).addClass('current');
 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		}); 
	});
  
  
    //isotop activation code close
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //more featured carousel plugin start
    $("#more-ft-carousel-customized").owlCarousel({
 
	  //autoPlay: 3000, //Set AutoPlay to 3 seconds
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  //more featured carousel plugin close
  
  
  
  
  
  
  
  
  
  
  
  
   //client opinion slide
 
  $("#client-carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 2,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1], 
	  stopOnHover : true
	  
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
 //company logo slide
 
  $("#company-logo-cover-called").owlCarousel({
 
      //autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 5,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3], 
	  stopOnHover : true
	  
  });

  
 
});








// animated header
 $(document).ready(function() {
        
            /* affix the navbar after scroll below header */
$('#nav').affix({
      offset: {
        top: $('header').height()-$('#nav').height()
      }
});    

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' })
});


























// slider text animationOptions

//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };





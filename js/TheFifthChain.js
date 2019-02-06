/*$ , global console*/


$(document).ready(function(){
    //NiceScroll trigger
    
// Change header Height
    $('.header').height($(window).height());

    // Show Navbar after Skipping header
    $(window).scroll(function(){
        var header = $('.header');

        if($(window).scrollTop()> header.height()){
            $('.navbar').show()  }else{
            $('.navbar').hide()
}
    });

    $('.tab-switch li').on('click', function(){

        $(this).addClass('selected').text('X').siblings().removeClass('selected').text('');

//  $('.tab-content > div').hide();
        $($(this).data("class")).show().siblings().hide()

    })


$('.header .fa-chevron-down').click(function(){
    $("html,body").animate({
        scrollTop: $('.features').offset().top
    },2000)
})



    /* S- hide placeholder when type*/
    var storage ='';

    $("[placeholder]").focus(function(){
        storage= $(this).attr('placeholder')
        $(this).attr('placeholder','')
    }).blur(function(){
        $(this).attr('placeholder',storage)
    })

/* E- hide placeholder when type*/



/* S-Scroll To Section from Navbar*/

  $('.contact-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.contact-us').offset().top
      },2000)
  })


      $('.info-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.gridlist').offset().top-100
      },2000)
  })

    $('.about-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.sublist').offset().top-50
      },2000)
  })

    $('.features-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.features').offset().top
      },2000)
  })
    $('.review-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.testimonials').offset().top - 40
      },2000)
  })
    $('.our-team-li').click(function(){
      $('html,body').animate({
          scrollTop: $('.our-team').offset().top - 40
      },2000)
  })
                                                                        /* ||
                                                                          $('.navbar li a').click(function(e){
                                                                            e.preventDefault()
                                                                            $(' body, html').animate({
                                                                                scrollTop: $("#"+ $(this).data('scroll')).offset().top +1
                                                                            })
                                                                            })*/
/* E-Scroll To Section from Navbar*/
    /* S- Change navbar li when Scrolling to specific section */

  //change color on selctor element and remove class from other siblings.

$('.navbar li').click(function(){
    $(this).addClass('cactive').parent().siblings().removeClass('cactive')
})


    $(window).scroll(function(){
            // select element when scroll to element and remove class from other siblings.

        $('.block').each(function(){

            if($(window).scrollTop() >= $(this).offset().top-120){

                var abc = $(this).attr('id');
                $('.navbar li a').removeClass()
                $('.navbar li a[data-scroll="'+ abc +'"]').addClass('cactive');
            }

        });

})





    /* animate using AOS*/
      AOS.init({
          duration: 3000,
          offset: 0
      });

$(window).on('load',function(){


    /*$('.loading-overlay .sk-cube-grid, .loading-overlay ').fadeOut(3000,function(){

            $('.loading-overlay').remove()
                $('body').css('overflow',"auto");

    });*/


       $('.loading-overlay .sk-cube-grid').fadeOut(3000,function(){

            $('.loading-overlay').remove()
                $('body').css('overflow',"auto");

/*S-Type machine*/
      var theText = $('.typer').data('text'),
       textLength = theText.length,
       n =0,

 machine = setInterval(function(){
     $('.typer').each(function(){
      $(this).html($(this).html()+theText[n])
     n= n+1;
     })

     if(n>= textLength){
         clearInterval(machine)
     }
 },200)
/*E-Type machine*/

    });
})
/* Loading page*/

/* S-Scroll to Top by one Click*/
var myButton = $('#scroll-top');

$(window).scroll(function(){
    if($(this).scrollTop()>=600){
        myButton.show()
    }else(
    myButton.hide()
    )
})


myButton.click(function(){
    $('html, body').animate({scrollTop:0},2000)
})
/* E-Scroll to Top by one Click*/



})
/*Start Notes Function*/

$(function neoAuto(){
       $(".ticker-list .active").each(function(){
            if(!$(this).is(":last-child")){
                $(this).delay(1000).fadeOut(1000, function(){
                    $(this).removeClass('active').next('li').addClass('active').fadeIn()
                neoAuto()
                })
            }else{
                $(this).delay(1000).fadeOut(1000, function(){
                    $(this).removeClass('active')
                    $('.ticker-list li').eq(0).addClass('active').fadeIn()
                 neoAuto()
                })
            }
          })
}());
/*End Notes Function*/
/*Start TASKS*/
    var newTask = $('.tasks-input');
    $('.add-task').on('submit', function(e){
        e.preventDefault()
        if(newTask.val() !=""){
            $('<li>'+newTask.val()+'</li>').appendTo('.tasks')
        }
        newTask.val('')
    })
    $('.tasks').on('click','li',function(){
        $(this).css('text-decoration', 'line-through').fadeOut(2000, function(){
            $(this).remove()
        })
    })

/*End TASKS*/






$('html').niceScroll({
        cursorcolor: "#f7600e",
        cursorwidth: 15,
        cursorborderradius:0,
        cursorborder:'1px solid #f7600e',
        horizrailenabled:false
    });

/***************************************Start CANVAS************************************/



// RequestAnimFrame: a browser API for getting smooth animations
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
		  window.webkitRequestAnimationFrame ||
		  window.mozRequestAnimationFrame    ||
		  window.oRequestAnimationFrame      ||
		  window.msRequestAnimationFrame     ||
		  function( callback ){
			window.setTimeout(callback, 1000 / 60);
		  };
})();

// Initializing the canvas
// I am using native JS here, but you can use jQuery,
// Mootools or anything you want
var canvas = document.getElementById("canvas");

// Initialize the context of the canvas
var ctx = canvas.getContext("2d");

// Set the canvas width and height to occupy full window
var W = window.innerWidth, H = window.innerHeight;
canvas.width = W;
canvas.height = H;

// Some variables for later use
var particleCount = 150,
	particles = [],
	minDist = 70,
	dist;

// Function to paint the canvas black
function paintCanvas() {
	// Set the fill color to black
	ctx.fillStyle = "rgba(0,0,0,1)";

	// This will create a rectangle of white color from the
	// top left (0,0) to the bottom right corner (W,H)
	ctx.fillRect(0,0,W,H);
}

// Now the idea is to create some particles that will attract
// each other when they come close. We will set a minimum
// distance for it and also draw a line when they come
// close to each other.

// The attraction can be done by increasing their velocity as
// they reach closer to each other

// Let's make a function that will act as a class for
// our particles.

function Particle() {
	// Position them randomly on the canvas
	// Math.random() generates a random value between 0
	// and 1 so we will need to multiply that with the
	// canvas width and height.
	this.x = Math.random() * W;
	this.y = Math.random() * H;


	// We would also need some velocity for the particles
	// so that they can move freely across the space
	this.vx = -1 + Math.random() * 2;
	this.vy = -1 + Math.random() * 2;

	// Now the radius of the particles. I want all of
	// them to be equal in size so no Math.random() here..
	this.radius = 4;

	// This is the method that will draw the Particle on the
	// canvas. It is using the basic fillStyle, then we start
	// the path and after we use the `arc` function to
	// draw our circle. The `arc` function accepts four
	// parameters in which first two depicts the position
	// of the center point of our arc as x and y coordinates.
	// The third value is for radius, then start angle,
	// end angle and finally a boolean value which decides
	// whether the arc is to be drawn in counter clockwise or
	// in a clockwise direction. False for clockwise.
	this.draw = function() {
		ctx.fillStyle = "#ff8100";
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

		// Fill the color to the arc that we just created
		ctx.fill();
	}
}

// Time to push the particles into an array
for(var i = 0; i < particleCount; i++) {
	particles.push(new Particle());
}

// Function to draw everything on the canvas that we'll use when
// animating the whole scene.
function draw() {

	// Call the paintCanvas function here so that our canvas
	// will get re-painted in each next frame
	paintCanvas();

	// Call the function that will draw the balls using a loop
	for (var i = 0; i < particles.length; i++) {
		p = particles[i];
		p.draw();
	}

	//Finally call the update function
	update();
}

// Give every particle some life
function update() {

	// In this function, we are first going to update every
	// particle's position according to their velocities
	for (var i = 0; i < particles.length; i++) {
		p = particles[i];

		// Change the velocities
		p.x += p.vx;
		p.y += p.vy

		// We don't want to make the particles leave the
		// area, so just change their position when they
		// touch the walls of the window
		if(p.x + p.radius > W)
			p.x = p.radius;

		else if(p.x - p.radius < 0) {
			p.x = W - p.radius;
		}

		if(p.y + p.radius > H)
			p.y = p.radius;

		else if(p.y - p.radius < 0) {
			p.y = H - p.radius;
		}

		// Now we need to make them attract each other
		// so first, we'll check the distance between
		// them and compare it to the minDist we have
		// already set

		// We will need another loop so that each
		// particle can be compared to every other particle
		// except itself
		for(var j = i + 1; j < particles.length; j++) {
			p2 = particles[j];
			distance(p, p2);
		}

	}
}

// Distance calculator between two particles
function distance(p1, p2) {
	var dist,
		dx = p1.x - p2.x,
		dy = p1.y - p2.y;

	dist = Math.sqrt(dx*dx + dy*dy);

	// Draw the line when distance is smaller
	// then the minimum distance
	if(dist <= minDist) {

		// Draw the line
		ctx.beginPath();
		ctx.strokeStyle = "rgba(255,255,255,"+ (1.2-dist/minDist) +")";
		ctx.moveTo(p1.x, p1.y);
		ctx.lineTo(p2.x, p2.y);
		ctx.stroke();
		ctx.closePath();

		// Some acceleration for the partcles
		// depending upon their distance
		var ax = dx/200000,
			ay = dy/200000;

		// Apply the acceleration on the particles
		p1.vx -= ax;
		p1.vy -= ay;

		p2.vx += ax;
		p2.vy += ay;
	}
}

// Start the main animation loop using requestAnimFrame
function animloop() {
	draw();
	requestAnimFrame(animloop);
}

animloop();
/***************************************End CANVAS************************************/






var Stats = function () {

	var startTime = Date.now(), prevTime = startTime;
	var ms = 0, msMin = Infinity, msMax = 0;
	var fps = 0, fpsMin = Infinity, fpsMax = 0;
	var frames = 0, mode = 0;

	var container = document.createElement( 'div' );
	container.id = 'stats';
	container.addEventListener( 'mousedown', function ( event ) { event.preventDefault(); setMode( ++ mode % 2 ) }, false );
	container.style.cssText = 'width:80px;opacity:0.9;cursor:pointer';

	var fpsDiv = document.createElement( 'div' );
	fpsDiv.id = 'fps';
	fpsDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#002';
	container.appendChild( fpsDiv );

	var fpsText = document.createElement( 'div' );
	fpsText.id = 'fpsText';
	fpsText.style.cssText = 'color:#0ff;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	fpsText.innerHTML = 'FPS';
	fpsDiv.appendChild( fpsText );

	var fpsGraph = document.createElement( 'div' );
	fpsGraph.id = 'fpsGraph';
	fpsGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0ff';
	fpsDiv.appendChild( fpsGraph );

	while ( fpsGraph.children.length < 74 ) {

		var bar = document.createElement( 'span' );
		bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#113';
		fpsGraph.appendChild( bar );

	}

	var msDiv = document.createElement( 'div' );
	msDiv.id = 'ms';
	msDiv.style.cssText = 'padding:0 0 3px 3px;text-align:left;background-color:#020;display:none';
	container.appendChild( msDiv );

	var msText = document.createElement( 'div' );
	msText.id = 'msText';
	msText.style.cssText = 'color:#0f0;font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:bold;line-height:15px';
	msText.innerHTML = 'MS';
	msDiv.appendChild( msText );

	var msGraph = document.createElement( 'div' );
	msGraph.id = 'msGraph';
	msGraph.style.cssText = 'position:relative;width:74px;height:30px;background-color:#0f0';
	msDiv.appendChild( msGraph );

	while ( msGraph.children.length < 74 ) {

		var bar = document.createElement( 'span' );
		bar.style.cssText = 'width:1px;height:30px;float:left;background-color:#131';
		msGraph.appendChild( bar );

	}

	var setMode = function ( value ) {

		mode = value;

		switch ( mode ) {

			case 0:
				fpsDiv.style.display = 'block';
				msDiv.style.display = 'none';
				break;
			case 1:
				fpsDiv.style.display = 'none';
				msDiv.style.display = 'block';
				break;
		}

	};

	var updateGraph = function ( dom, value ) {

		var child = dom.appendChild( dom.firstChild );
		child.style.height = value + 'px';

	};

	return {

		REVISION: 12,

		domElement: container,

		setMode: setMode,

		begin: function () {

			startTime = Date.now();

		},

		end: function () {

			var time = Date.now();

			ms = time - startTime;
			msMin = Math.min( msMin, ms );
			msMax = Math.max( msMax, ms );

			msText.textContent = ms + ' MS (' + msMin + '-' + msMax + ')';
			updateGraph( msGraph, Math.min( 30, 30 - ( ms / 200 ) * 30 ) );

			frames ++;

			if ( time > prevTime + 1000 ) {

				fps = Math.round( ( frames * 1000 ) / ( time - prevTime ) );
				fpsMin = Math.min( fpsMin, fps );
				fpsMax = Math.max( fpsMax, fps );

				fpsText.textContent = fps + ' FPS (' + fpsMin + '-' + fpsMax + ')';
				updateGraph( fpsGraph, Math.min( 30, 30 - ( fps / 100 ) * 30 ) );

				prevTime = time;
				frames = 0;

			}

			return time;

		},

		update: function () {

			startTime = this.end();

		}

	}

};

if ( typeof module === 'object' ) {

	module.exports = Stats;

}
/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
particlesJS('particles-jsv',

  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);

$(document).ready(function(){
  $('.owl-carousel').owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop:true

        },
        600:{
            items:3,
            nav:false,
            loop:true

        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})

  $(document).ready(function($) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000



            });
        });


    // Store the object

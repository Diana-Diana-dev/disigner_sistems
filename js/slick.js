 $(document).ready(function(){
 	$('.slider').slick({
 		  arrows:true,
 		  dots:false,
 		  slidesToShow:3,
 		  speed:1000,
 		  easing:'ease',
 		  infinite:true,
 		  autoplay:true,
 		  autoplaySpeed:2000,
 		  touchThreshold:10,
 		  waitForAnimate:false,
 		  // centerMode:true,
 		  // variableWidth:false,
//          responsive: [
//         {
//      		 breakpoint: 1024,
//      		 settings: {
//           		slidesToShow: 2,
//           		 arrows: false
//           	}
//          },
//          {
//          	breakpoint: 768,
//      		 settings: {
//           		slidesToShow: 1,
//               arrows: false
//          }
//      }
//         ]
 	});
 });
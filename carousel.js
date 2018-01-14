$(document).ready(function(){
  
    var owl = $("#owl-demo");
    
    
$('#owl-demo').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    startPosition:6,
    items: 1,
    itemsDesktop: false,//1400:screen size, 3: number if items in the slide
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false
})
   
    
  
   owl.on('mousewheel', '.owl-stage', function (e) {
        
   if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
})

    
    
        
    
    

 });







jQuery(function($) {
    //quando se clica na da esquerda, a da direita abre
    $('.purpose-l-click-js').click(function(){
        if($('.purpose').hasClass('purpose--right-clicked')){
            $('.purpose').removeClass('purpose--right-clicked');
            
        }
        $('.purpose').addClass('purpose--left-clicked'); 
        $('.purpose__section-text--l').css('visibility','visible');
        
    });
    
    $('.purpose-r-click-js').click(function(){
        if($('.purpose').hasClass('purpose--left-clicked')){
            $('.purpose').removeClass('purpose--left-clicked');    
        }
        $('.purpose').addClass('purpose--right-clicked');
        $('.purpose__section-text--r').css('visibility','visible');
    });
    
    $('footer').click(function(evt){
        if(!evt.target.matches(".purpose")){
            if($('.purpose').hasClass('purpose--left-clicked')){
                $('.purpose').removeClass('purpose--left-clicked');    
            }
            else if($('.purpose').hasClass('purpose--right-clicked')){
                $('.purpose').removeClass('purpose--right-clicked');    
            }
            console.log("oh hai mark");
        }
        $('.purpose__section-text--l').css('visibility','hidden');
        $('.purpose__section-text--r').css('visibility','hidden');
    });
});

var moveForce = 30; // max popup movement in pixels
var rotateForce = 20; // max popup rotation in deg

$(document).mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();
    
    var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    
    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);
    
    $('.popup')
        .css('left', moveX+'px')
        .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
});
$(document).ready(function(){    
    'use strict'

    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, true);
    window.onmousewheel = document.onmousewheel = wheel;
    
    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;
    
        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }
    
    function handle(delta) {
        var time 	= 700;
        var distance 	= 662;
    
        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time );
    }
    


    var contador = 1;

$('#contacto').click(function(){
    if (contador == 1) {
        $('.contenedorform').animate({
            right: 0
        });
        contador = 0;       
    }else{
        contador = 1;
        $('.contenedorform').animate({
            right: "-40%"
        });
    }
   
      
});

 $('.interruptor').click(function(){
    
    if (contador == 1) {
        $('.contenedorform').animate({
            right: 0
        });
        contador = 0;       
    }else{
        contador = 1;
        $('.contenedorform').animate({
            right: "-40%"
        });
    }   
    });

    $('#plus').click(function(){
        if (contador == 1){
            $('.enlace').css("display","block");
            $('.enlace').animate({opacity:1 });

            $('.procedimiento').animate({marginBottom: "40px"});
            $('.procedimiento:nth-last-child(2)').css("height", "316px");
            $('.procedimiento:nth-last-child(1)').css("height", "308px");
            contador = 0;
        
        } else{
           contador = 1;
            $('.enlace').css("display","none");
            $('.enlace').animate({opacity:0 });

            $('.procedimiento').animate({marginBottom: "0px"});
            $('.procedimiento:nth-last-child(2)').css("height", "290px");
            $('.procedimiento:nth-last-child(1)').css( "top", "30px");    
        }
    });
    $( ".armar" ).mgGlitch({

        // set 'true' to stop the plugin
        destroy : false, 
      
        // set 'false' to stop glitching
        glitch: true, 
      
        // set 'false' to stop scaling
        scale: true, 
      
        // set 'false' to stop glitch blending
        blend : true, 
      
        // select blend mode type
        blendModeType : 'hue', 
      
        // set min time for glitch 1 elem
        glitch1TimeMin : 600, 
      
        // set max time for glitch 1 elem
        glitch1TimeMax : 900, 
      
        // set min time for glitch 2 elem
        glitch2TimeMin : 10, 
      
        // set max time for glitch 2 elem
        glitch2TimeMax : 115, 
      
        // z-index
        zIndexStart : 5
        
      });
      
});
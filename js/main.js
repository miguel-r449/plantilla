'use strict'
$(document).ready(function(){

    // inicio de sesion
    var sesion = $("#sesion");
    var sesionBoton = $("#sesion-boton");
    var sesionIniciada = $("#sesion-iniciada");
    var eleccion = $("#eleccion");
    var temasSesion = $("#temas-sesion");
    sesionBoton.click(function(){
        this.animate({
            border: '2px solid gray',
            background: 'black',
            color: 'white'
        }, 400);
        sesion.css('display','none');
       
       
        
        
        sesionIniciada.css('display', 'block');
        eleccion.css('display', 'none');
        temasSesion.css('display', 'none')
        
        



    });








    // menu lateral
    var menuLateral = $("#menu-lateral");
    var contenido = $("#contenido");
    var botonMenuLateral = $("#boton-menu-lateral");
    botonMenuLateral.click(function(){
        
        if (  menuLateral.css("display") == "block" ) {
            menuLateral.css("display", "none");
        } else {
            menuLateral.css("display","block");
          
        }
        
    });

    // temas
    var TemaOscuro = $(".oscuro");
    var TemaClaro = $(".claro");
    var TemaSemiOscuro = $(".gris");
    var cuerpo = $("#cuerpo");
    var labels = $(".sesion-label");
    TemaClaro.click(function(){
        cuerpo.css('background','#fff');
        cuerpo.css('color', 'black');
        labels.css('color', 'black');
        

    });
    TemaOscuro.click(function(){
        cuerpo.css('background', '#300a0a');
        cuerpo.css('color', 'white');
        labels.css('color', 'white');
        
    });
    TemaSemiOscuro.click(function(){
        cuerpo.css('background', '#464545');
        cuerpo.css('color', 'white');
        labels.css('color', 'white');

    });

});
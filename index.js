function mensajeEnviado(){
    let nombre=$('#nombre').val();
    let apellido=$('#apellido').val();
    
let envioMensaje= (`Hola ${nombre} ${apellido} , Tu Consulta fue enviado Exitosamente, a la brevedad nos pondremos en contacto.`);
document.write(envioMensaje);
}

//BOTON DE SCROLL-UP
$(document).ready(function(){

	$('.ir-inicio').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('.ir-inicio').slideDown(300);
		} else {
			$('.ir-inicio').slideUp(300);
		}
	});

});
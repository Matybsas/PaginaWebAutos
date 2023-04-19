$(document).ready(function(){

	//BOTON DE SCROLL-UP
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

function validarFormulario(){
	let nombre=document.getElementById('nombre');
	let apellido=document.getElementById('apellido');
	let direccion=document.getElementById('direccion');
	let telefono=document.getElementById('telefono');
	let email=document.getElementById('email');
    let consulta=document.getElementById('consulta');
	
    nombre.addEventListener("input", function(){
		if(nombre.validity.valid){
			nombre.setCustomValidity("Debes Ingresar un Nombre");
		}else{
			nombre.setCustomValidity("");
		}
	});
	apellido.addEventListener("input", function(event){
		if(apellido.validity.valid){
			apellido.setCustomValidity("Debes Ingresar un Apellido");
		}else{
			apellido.setCustomValidity("");
		}
	});
	direccion.addEventListener("input", function(event){
		if(direccion.validity.valid){
			direccion.setCustomValidity("Debes Ingresar una Direccion");
		}else{
			direccion.setCustomValidity("");
		}
	});
	telefono.addEventListener("input", function(event){
		if(telefono.validity.valid){
			telefono.setCustomValidity("Debes Ingresar un Numer de Telefono");
		}else{
			telefono.setCustomValidity("");
		}
	});
	email.addEventListener("input", function (event) {
		if (email.validity.typeMismatch) {
		  email.setCustomValidity("¡Se esperaba una dirección de correo electrónico!");
		} else {
		  email.setCustomValidity("");
		}
	});
	consulta.addEventListener("input", function(event){
		if(consulta.validity.valid){
			consulta.setCustomValidity("Debes Ingresar un Numer de Telefono");
		}else{
			consulta.setCustomValidity("");
		}
	});
}

function mensajeEnviado(){
	//verificacion de formulario
    if (validarFormulario() === true){

	Swal.fire({
		position: 'top-center',
		icon: 'success',
		title:`hola ${nombre} ${apellido}, Tu Consulta Fue Enviado Exitosamente, a la Brevedad nos Pondremos en Contaco `,
		showConfirmButton: false,
		timer: 1500
	  })
	}
}  

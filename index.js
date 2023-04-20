let validacion;
$(document).ready(function () {
//BOTON DE SCROLL-UP
	$('.ir-inicio').click(function () {
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('.ir-inicio').slideDown(300);
		} else {
			$('.ir-inicio').slideUp(300);
		}
	});
});
//FORMULARIO CONTACTO
function validarFormularios() {
	document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("contacto").addEventListener('submit', validarFormulario); 
	  });
	  
	  function validarFormulario(evento) {
		evento.preventDefault();
		let nombre = document.getElementById('nombre').value;
		if(nombre.length == 0) {
			Swal.fire({
				icon: 'error',
				title: 'Por Favor Ingresa un Nombre!',
				html: '<img src="imagenes/logo.png" style="width: 100px;" alt="">',
				showConfirmButton: false,
				timer: 3500
			  })
		  return;
		}
		let apellido = document.getElementById('apellido').value;
		if (apellido.length < 6) {
			Swal.fire({
				icon: 'error',
				title: 'Por Favor Ingresa un Apellido!',
				html: '<img src="imagenes/logo.png" style="width: 100px;" alt="">',
				showConfirmButton: false,
				timer: 3500
			  })
		  return;
		}
		let direccion = document.getElementById('direccion').value;
		if (direccion.length < 6) {
			Swal.fire({
				icon: 'error',
				title: 'Por Favor Ingresa una Direccion!',
				html: '<img src="imagenes/logo.png" style="width: 100px;" alt="">',
				showConfirmButton: false,
				timer: 3500
			  })
		  return;
		}
		let telefono = document.getElementById('telefono').value;
		if (telefono.length < 6) {
			Swal.fire({
				icon: 'error',
				title: 'Por Favor Ingresa un Numero de Telefono!',
				html: '<img src="imagenes/logo.png" style="width: 100px;" alt="">',
				showConfirmButton: false,
				timer: 3500
			  })
		  return;
		}
		let email = document.getElementById('email').value;
		if (email.length < 6) {
			Swal.fire({
				icon: 'error',
				title: 'Por Favor Ingresa un E-mail Valido!',
				html: '<img src="imagenes/logo.png" style="width: 100px;" alt="">',
				showConfirmButton: false,
				timer: 3500
			  })
		  return;
		}
		let consulta = document.getElementById('consulta').value;
		if (consulta.length < 6) {
			Swal.fire({
				icon: 'error',
				title: 'Por Favor Ingresa una Consulta!',
				html: '<img src="imagenes/logo.png" style="width: 100px;" alt="">',
				showConfirmButton: false,
				timer: 3500
			  })
		  return;
		}
		this.submit(Swal.fire({
			position: 'top-center',
			icon: 'success',
			title: `hola ${nombre} ${apellido}, Tu Consulta Fue Enviado Exitosamente, a la Brevedad nos Pondremos en Contaco `,
			html: '<img src="imagenes/logo.png" style="width: 100px;" alt="">',
			showConfirmButton: false,
			timer: 5500
		}));
	  }
}
validacion = validarFormularios();

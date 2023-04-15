function mensajeEnviado(){
    let nombre=$('#nombre').val();
    let apellido=$('#apellido').val();
    
let envioMensaje= (`Hola ${nombre} ${apellido} , Tu Consulta fue enviado Exitosamente, a la brevedad nos pondremos en contacto.`);
document.write(envioMensaje);
}
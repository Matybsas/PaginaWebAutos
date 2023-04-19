$(document).ready(function(){
    let diaHoy = new Date();
    let diaProximaSemana = new Date();
    diaProximaSemana.setDate(diaHoy.getDate() + 7);
    $.ajax({
        method: "GET",
        url:"https://api.open-meteo.com/v1/forecast",
        data: {
            'latitude': -52.52,
            'longitude': -13.41,
            'hourly':'precipitation_probability,rain,snowfall',
             'start_date': '2023-04-18',
             'end_date': '2023-04-25',
             'timezone': 'America/Sao_Paulo',
        
        
        }
    }).done(function (respuestaClima)  {
        respuestaClima.hourly.precipitation_probability.forEach(probabilidad => {
        console.log(probabilidad);
        });
        $('#intputParaMostrar').val(`La Probabilidad de Lluvia es : ${respuestaClima.hourly.precipitation_probability[1]}`);
        $('#intputParaFecha').val(`La Probabilidad de Lluvia es en:${respuestaClima.timezone}`);

        });
});
        
       let probabilidad =$('#intputParaMostrar').val();
       let resultado = parseInt(probabilidad);
       
       if(resultado >=5 ) {
        window.alert('Utilizar Neumaticos de Lluvia');
       } else{
        window.alert ('Utilizar Neumaticos Lisos');
       }


        function obtenerFechaFormateada(fecha) {
        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;
        let anio= fecha.getFullYear();
        return `$(anio)--$(mes > 10 ? mes : '0' + mes)--${dia}`;
        }

        


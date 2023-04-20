let probabilidad;

$(document).ready(function () {
    let diaHoy = new Date();
    let diaProximaSemana = new Date();
    diaProximaSemana.setDate(diaHoy.getDate() + 7);
    $.ajax({
        method: "GET",
        url: "https://api.open-meteo.com/v1/forecast",
        data: {
            'latitude': -34.61,
            'longitude': -58.38,
            'hourly': 'precipitation_probability,precipitation,rain',
            'daily': 'precipitation_probability_max',
            'current_weather': 'true',
            'start_date': '2023-04-18',
            'end_date': '2023-04-25',
            'timezone': 'America/Sao_Paulo',
        }
    }).done(function (respuestaClima) {
        respuestaClima.daily.precipitation_probability_max.forEach(lluvia => {
            let opcion = new Option(lluvia.precipitation_probability_max);

            $('#agregarProbabilidad').append($(opcion));
        });
        $('#mostrarProbabilidad').val(`${respuestaClima.daily.precipitation_probability_max[0]}`);

        probabilidad = $('#mostrarProbabilidad').val();
    })
});


probabilidad = $('#mostrarProbabilidad').val();
function obtenerProbabilidad() {
    if (probabilidad >= 30) {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `va a Llover, Te Recomendamos colocar: Neumaticos de Lluvia `,
            html: '<img src="imagenes/rueda.png" style="width: 200px;" alt="">',
            showConfirmButton: false,
            timer: 3500
        });
    } else {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: `No va a LLover, Te Recomendamos Usar: Neumaticos Lisos! `,
            html: '<img src="imagenes/neumatico-liso.png" style="width: 200px;" alt="">',
            showConfirmButton: false,
            timer: 3500
        });
    }
}

function obtenerFechaFormateada(fecha) {
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
    return `$(anio)--$(mes > 10 ? mes : '0' + mes)--${dia}`;
}




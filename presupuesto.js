$(document).ready(function(){
 
cambioMarca();

cambioModelo();
precioFinal();


});


function limpiarLista(lista){
    $(lista).empty();
    
}

function cambioMarca(){
$("#marca").on ("change", function(){
    limpiarLista('#modeloSelect');
    let marcaSeleccionada= this.value;
    autos.forEach(auto=> {
    if (marcaSeleccionada.toLowerCase()=== auto.marca.toLowerCase()){
        
        $("#modeloSelect").append (new Option (auto.modelo, auto.id));
    }
    });
    
});
}

function cambioModelo(){
      $("#modeloSelect").on ("change", function(){
        limpiarLista('#anioSelect');
     

        let modeloSeleccionado= $("#modeloSelect option:selected").text();
        
        autos.forEach(auto=> {
        if (modeloSeleccionado.toLowerCase()=== auto.modelo.toLowerCase()){
            
            $("#anioSelect").append (new Option (auto.anio, auto.id));
        }
        });
        
    });
}

function precioFinal(){
    $("#anioSelect").on ("change", function(){
       limpiarLista('#txImporte');
        let precioSeleccionado= $("#anioSelect option:selected").text();
        
        autos.forEach(auto=> {
        if (precioSeleccionado.toLowerCase()=== auto.anio.toLowerCase()){
            
            $("#txImporte").append (new Option (auto.precio, auto.id));
        }
        });
        
    });
}


//ARRAY DE AUTOS 
let autos = [
{
    id:1,
     marca: "Ford",
     modelo: "Focus",
    anio:"2023",
    precio:"3000000"
},
{
    id:2,
    marca: "Ford",
    modelo: "Falcon",
    anio:"1986",
    precio:"100000"
},
{
    id:3,
    marca: "Ford",
    modelo: "Fiesta",
    anio:"2021",
    precio:"1500000"
},
{
    id:4,
    marca: "Dodge",
    modelo: "Ram",
    anio:"2020",
    precio:"5500000"
},
{
    id:5,
    marca: "Peugeot",
    modelo: "208",
    anio:"2019",
    precio:"100000"
},
{
    id:6,
    marca: "Peugeot",
    modelo: "408",
    anio:"2020",
    precio:"100000"
},
{
    id:7,
    marca: "Chevrolet",
    modelo: "Astra",
    anio:"2000",
    precio:"100000"
},
{
    id:8,
    marca: "Chevrolet",
    modelo: "Camaro",
    anio:"2023",
    precio:"100000"
},
{
    id:9,
    marca: "Dodge",
    modelo: "Journey",
    anio:"2018",
    precio:"4900000"
},
{
    id:10,
    marca: "Dodge",
    modelo: "Charger",
    anio:"2023",
    precio:"100000"
},
{
    id:11,
    marca: "Dodge",
    modelo: "Durango",
    anio:"2023",
    precio:"100000"
},
{
    id:12,
    marca: "Ford",
    modelo: "Falcon",
    anio:"1989",
    precio:"154000"
},
]
var respuestas = ["mono","un mono","el mono"];
var pistas = ["Come bananas","Vive en la selva","Es un animal"]
var intentos = 4;


function adivinar(){
    var respuesta = document.getElementById('respuesta').value;    
    var correcto = false;    
    for(r in respuestas){
        if(respuesta == respuestas[r]){
            correcto = true;
            break;
        }
    }
    if(correcto){
        document.getElementById('intentos').innerHTML = "<h3>Adivinaste!</h3><br><h5>La respuesta era 'mono'</h5>";
        document.getElementById('boton').hidden = true;
        document.getElementById('respuesta').hidden = true;
        document.getElementById('pistas').hidden = true;
    }
    else{
        intentos--;
        if(intentos != 0){
            document.getElementById('intentos').innerText = "(Te quedan " + intentos + " intentos)";
            document.getElementById('pistas').innerHTML = "<br><h4>Pista:</h4><br><h7 class='titulo'>" + pistas[intentos - 1]+ "</h7>"
        }
        else{
            document.getElementById('intentos').innerHTML = "<h4>Lo sentimos, ya no te quedan intentos</h4><br><h5>La respuesta era 'mono'</h5>";
            document.getElementById('boton').hidden = true;
            document.getElementById('respuesta').hidden = true;
            document.getElementById('pistas').hidden = true;
        }            
    }
       
}

function loadDoc(){
    let xhttp = new XMLHttpRequest();

    xhttp.open("GET","../JSON/Piloto.json",true);
    xhttp.send();

    xhttp.onreadystatechange = function (){
        if(this.readyState==4 && this.status==200){
            const json = JSON.parse(this.responseText);
            document.getElementsByClassName("titular").item(0).innerHTML = json.Nombre + " " + json.Apellidos;
            document.getElementsByClassName("descripcion").item(0).innerHTML = json.Info;
            document.getElementsByClassName("historico").item(0).innerHTML = "Escuderia actual: " + json.Escuderia;
            document.getElementsByClassName("historico").item(1).innerHTML = "Fecha nacimiento: " + json.DiaNacimiento + "/" + json.MesNacimiento + "/" + json.AnoNacimiento;
            document.getElementsByClassName("historico").item(2).innerHTML = "Estatura: " + json.Estatura;
            document.getElementsByClassName("historico").item(3).innerHTML = "Nacionalidad: " + json.Nacionalidad;
            let text = "";
            for (let x in json.Historico) {
                text += "<li>" + json.Historico[x].Titulo + " " + json.Historico[x].año + "</li>";
                console.log(text);
            };
            document.getElementsByClassName("lista").item(0).innerHTML = text;
        };

    }

}

loadDoc();
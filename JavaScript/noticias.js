
function nuevaInfo(subcontendor){//Actualizaremos el contenido con consultas al server
    return subcontendor;
}

function anadir(){
    let contenedor=document.getElementsByClassName("contenedor");
    let subcontenedor=document.getElementsByClassName("subcontenedor");
    contenedor.item(contenedor.length-1).appendChild(nuevaInfo(subcontenedor.item(0)));
}

document.getElementsByClassName("masinfo").item(0).addEventListener("click",anadir);
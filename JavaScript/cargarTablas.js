$(document).ready(function(){
  $.ajax({
    type: "GET",
    url: "../XML/resultadosTabla1.xml",
    dataType: "xml",
    success: function(xml) {
      $("#tabla1").append("<tr><td>"+"<strong>NOMBRE PILOTO:</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 1</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 2</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 3</strong>"+"</td><td>"+"<strong>NEUMÁTICO</strong>"+"</td><td>"+"<strong>TIEMPO TOTAL</strong>"+"</td></tr>");
      $(xml).find("PILOTO").each(function(){

        nombre = $(this).find("NOMBRE").text();
        s1 = $(this).find("S1").text();
        s2 = $(this).find("S2").text();
        s3 = $(this).find("S3").text();
        neumatico = $(this).find("NEUMATICO").text();
        tiempoSegundos = Math.round((parseFloat(s1)+parseFloat(s2)+parseFloat(s3))*1000)/1000;
        tiempoTotal = String(Math.floor(tiempoSegundos/60)) + "." + String(Math.round(tiempoSegundos%60*1000)/1000);

        $("#tabla1").append("<tr><td>"+nombre+"</td><td>"+s1+"</td><td>"+s2+"</td><td>"+s3+"</td><td>"+neumatico+"</td><td>"+tiempoTotal+"</td></tr>");

      });

    }
  });
  $.ajax({
    type: "GET",
    url: "../XML/resultadosTabla2.xml",
    dataType: "xml",
    success: function(xml) {
      $("#tabla2").append("<tr><td>"+"<strong>NOMBRE PILOTO:</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 1</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 2</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 3</strong>"+"</td><td>"+"<strong>NEUMÁTICO</strong>"+"</td><td>"+"<strong>TIEMPO TOTAL</strong>"+"</td></tr>");
      $(xml).find("PILOTO").each(function(){

        nombre = $(this).find("NOMBRE").text();
        s1 = $(this).find("S1").text();
        s2 = $(this).find("S2").text();
        s3 = $(this).find("S3").text();
        neumatico = $(this).find("NEUMATICO").text();
        tiempoSegundos = Math.round((parseFloat(s1)+parseFloat(s2)+parseFloat(s3))*1000)/1000;
        tiempoTotal = String(Math.floor(tiempoSegundos/60)) + "." + String(Math.round(tiempoSegundos%60*1000)/1000);

        $("#tabla2").append("<tr><td>"+nombre+"</td><td>"+s1+"</td><td>"+s2+"</td><td>"+s3+"</td><td>"+neumatico+"</td><td>"+tiempoTotal+"</td></tr>");

      });

    }
  });
  $.ajax({
    type: "GET",
    url: "../XML/resultadosTabla3.xml",
    dataType: "xml",
    success: function(xml) {
      $("#tabla3").append("<tr><td>"+"<strong>NOMBRE PILOTO:</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 1</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 2</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 3</strong>"+"</td><td>"+"<strong>NEUMÁTICO</strong>"+"</td><td>"+"<strong>TIEMPO TOTAL</strong>"+"</td></tr>");
      $(xml).find("PILOTO").each(function(){

        nombre = $(this).find("NOMBRE").text();
        s1 = $(this).find("S1").text();
        s2 = $(this).find("S2").text();
        s3 = $(this).find("S3").text();
        neumatico = $(this).find("NEUMATICO").text();
        tiempoSegundos = Math.round((parseFloat(s1)+parseFloat(s2)+parseFloat(s3))*1000)/1000;
        tiempoTotal = String(Math.floor(tiempoSegundos/60)) + "." + String(Math.round(tiempoSegundos%60*1000)/1000);

        $("#tabla3").append("<tr><td>"+nombre+"</td><td>"+s1+"</td><td>"+s2+"</td><td>"+s3+"</td><td>"+neumatico+"</td><td>"+tiempoTotal+"</td></tr>");

      });

    }
  });
  $.ajax({
    type: "GET",
    url: "../XML/resultadosTabla4.xml",
    dataType: "xml",
    success: function(xml) {
      $("#tabla4").append("<tr><td>"+"<strong>NOMBRE PILOTO:</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 1</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 2</strong>"+"</td><td>"+"<strong>TIEMPO SECTOR 3</strong>"+"</td><td>"+"<strong>NEUMÁTICO</strong>"+"</td><td>"+"<strong>TIEMPO TOTAL</strong>"+"</td></tr>");
      $(xml).find("PILOTO").each(function(){

        nombre = $(this).find("NOMBRE").text();
        s1 = $(this).find("S1").text();
        s2 = $(this).find("S2").text();
        s3 = $(this).find("S3").text();
        neumatico = $(this).find("NEUMATICO").text();
        tiempoSegundos = Math.round((parseFloat(s1)+parseFloat(s2)+parseFloat(s3))*1000)/1000;
        tiempoTotal = String(Math.floor(tiempoSegundos/60)) + "." + String(Math.round(tiempoSegundos%60*1000)/1000);

        $("#tabla4").append("<tr><td>"+nombre+"</td><td>"+s1+"</td><td>"+s2+"</td><td>"+s3+"</td><td>"+neumatico+"</td><td>"+tiempoTotal+"</td></tr>");

      });

    }
  });
});

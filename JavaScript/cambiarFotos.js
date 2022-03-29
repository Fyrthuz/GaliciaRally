const fotos = ["./PortadaHomePage.jpg", "./Noticias/imagen_noticia1.jpeg", "./Noticias/imagen_noticia3.jpeg", "./Noticias/imagen_noticia2.jpeg"];
for (let i = 0; i < fotos.length; i++) {
  setTimeout(function(){
    document.getElementById("imgportada").src=fotos[i];
  }, 5000*i);
}

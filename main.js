var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";

    // Atualiza o texto correspondente à imagem atual
    if (slideIndex === 1) {
        document.getElementById("nomeDocente").innerHTML = "Prof. Joana Silva";
        document.getElementById("descricaoDocente").innerHTML = "Graduada em Ciência da Computação, Mestre em Engenharia de Software. Atua como docente na área de Desenvolvimento de Sistemas desde 2010.";
    } else if (slideIndex === 2) {
        document.getElementById("nomeDocente").innerHTML = "Prof. Maria Santos";
        document.getElementById("descricaoDocente").innerHTML = "Doutora em Tecnologia da Informação, com vasta experiência em projetos de desenvolvimento web. Ministra aulas desde 2005.";
    } else if (slideIndex === 3) {
        document.getElementById("nomeDocente").innerHTML = "Prof. Carlos Oliveira";
        document.getElementById("descricaoDocente").innerHTML = "Engenheiro de Software com foco em sistemas embarcados. Possui ampla experiência na indústria. Leciona desde 2012.";
    }
}
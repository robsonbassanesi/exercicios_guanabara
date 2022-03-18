function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var res = document.getElementById("res");
    if (fano.value.length == 0 || fano.value > ano) {
        alert("Erro, Verifique o ano e tente novamente");
    } else {
        var fsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement("img");
        img.setAttribute("id", "foto");
        img.style.padding = "15px";
        if (fsex[0].checked) {
            genero = "Homem";
            if (idade >= 0 && idade <= 10) {
                //bebe
                img.setAttribute("src", "./assets/bebe_m.png")
            } else if (idade <= 18) {
                //jovem
                img.setAttribute("src", "./assets/jovem_m.png")
            } else if (idade <= 50) {
                //adulto
                img.setAttribute("src", "./assets/adulto_m.png")
            } else {
                //idoso
                img.setAttribute("src", "./assets/idoso_m.png")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher";
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute("src", "./assets/bebe_f.png")
            } else if (idade < 18) {
                //jovem
                img.setAttribute("src", "./assets/jovem_f.png")
            } else if (idade < 50) {
                //adulto
                img.setAttribute("src", "./assets/adulto_f.png")
            } else {
                //idoso
                img.setAttribute("src", "./assets/idoso_f.png")
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}
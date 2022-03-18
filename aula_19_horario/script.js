function carregar() {
    var msg = document.getElementById("texto");
    var img = document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`;

    if (hora >= 0 && hora < 12) {
        img.src = "./assets/manha.png"
        document.body.style.background = "#F5DEB3"
    } else if (hora >= 12 && hora < 18) {
        img.src = "./assets/tarde.png"
        document.body.style.background = "#1E95FF"
    } else {
        img.src = "./assets/noite.png"
        document.body.style.background = "#4F4F4F	"
    }

}

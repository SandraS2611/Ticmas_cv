function login() {
    var username, password

    username = document.getElementById("correo").value;
    password = document.getElementById("contraseña").value;

    if (username == "correo" && password == "contraseña") {
        window.location = "index2.html";
    } else {
        alert("Direccion de Correo o Contraseña invalidos");
    }
}

function enviar() {
    swal({
        title: "Gracias por tu Aporte!!",
        text: "Tu mensaje fue enviado",
        icon: "success",
        button: "Listo",
    }); event.preventDefault();
}
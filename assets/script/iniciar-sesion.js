const boton = document.getElementById("btnLogin");

boton.addEventListener("click", login);

function login(){

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if(usuario === "admin" && password === "1234"){

        alert("Bienvenido al sistema");

    }else{

        alert("Usuario o contraseña incorrectos");

    }

}
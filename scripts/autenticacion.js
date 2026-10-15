const formRegistro = document.getElementById("form-registro");

if (formRegistro) {
  formRegistro.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim().toLowerCase();
    const telefono = document.getElementById("telefono").value.trim();
    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById(
      "confirmar-contrasena",
    ).value;

    const mensaje = document.getElementById("mensaje-registro");

    if (contrasena !== confirmarContrasena) {
      mensaje.textContent = "Las contraseñas no coinciden.";
      return;
    }

    const usuarios = JSON.parse(localStorage.getItem("luddo_usuarios")) || [];

    const correoExiste = usuarios.some((usuario) => usuario.correo === correo);

    if (correoExiste) {
      mensaje.textContent = "Ya existe una cuenta con este correo.";
      return;
    }

    const nuevoUsuario = {
      id: Date.now(),
      nombre: nombre,
      correo: correo,
      telefono: telefono,
      contrasena: contrasena,
    };

    usuarios.push(nuevoUsuario);

    localStorage.setItem("luddo_usuarios", JSON.stringify(usuarios));

    alert("Cuenta creada correctamente.");

    window.location.href = "login.html";
  });
}

const formLogin = document.getElementById("form-login");

if (formLogin) {
  formLogin.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const correo = document.getElementById("correo-login").value.trim().toLowerCase();

    const contrasena = document.getElementById("contrasena-login").value;

    const mensaje = document.getElementById("mensaje-login");

    const usuarios = JSON.parse(localStorage.getItem("luddo_usuarios")) || [];

    const usuarioEncontrado = usuarios.find((usuario) => usuario.correo === correo && usuario.contrasena === contrasena,);

    if (!usuarioEncontrado) {
      mensaje.textContent = "Correo o contraseña incorrectos.";
      return;
    }

    const sesion = {
      id: usuarioEncontrado.id,
      nombre: usuarioEncontrado.nombre,
      correo: usuarioEncontrado.correo,
    };

    localStorage.setItem("luddo_sesion", JSON.stringify(sesion));

    alert(`Bienvenido, ${usuarioEncontrado.nombre}.`);

    window.location.href = "index.html";
  });
}

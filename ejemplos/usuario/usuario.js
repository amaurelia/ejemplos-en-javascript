fetch("https://randomuser.me/api/?results=7")
    .then((response) => response.json())
    .then((data) => {
        const usuario = data.results;
        let cant_usuarios = usuario.length;
        console.log(`Cantidad de usuarios obtenidos: ${cant_usuarios}`);
        console.log("Usuario obtenido:", usuario);

        for (let i = 0; i < cant_usuarios; i++) {

            let genero = usuario[i].gender;
            let nombre = usuario[i].name.first + " " + usuario[i].name.last;
            let email = usuario[i].email;
            let pais = usuario[i].location.country;
            let edad = usuario[i].dob.age;
            let telefono = usuario[i].phone;
            let foto = usuario[i].picture.large;

            let boton_genero = "";
            if(genero=="male"){
                boton_genero = `<button class="btn celeste"> <i class="bi bi-gender-male me-2"></i> Hombre</button>`;
            } else {
                boton_genero = `<button class="btn rosa"> <i class="bi bi-gender-female me-2"></i> Mujer</button>`;

            }

            document.getElementById("lista_cards").innerHTML += `
                <div class="card m-2">
                    <div class="card-body">
                        <div class="centrado">
                            <h5 class="card-title ">
                                <i class="bi bi-person-bounding-box me-2 naranjo"></i>
                                ${nombre}
                            </h5>
                            <img src="${foto}" alt="Avatar" class="avatar rounded-circle mb-3">
                        </div>
                        <p class="card-text">
                            <i class="bi bi-telephone-fill me-2 naranjo"></i> 
                            <b>Fono:</b> ${telefono} <br>

                            <i class="bi bi-flag-fill me-2 naranjo"></i> 
                            <b>País:</b> ${pais} <br>

                            <b>Género:</b> ${boton_genero} <br>

                            ${email} <br>

                            <i class="bi bi-cake-fill me-2 naranjo"></i> 
                            <b>Edad:</b> ${edad} años <br>
                        </p>
                    </div>
                </div>
            `;
        }


        

    })
    .catch((error) => {
        console.error("Error al obtener el usuario:", error);
    });

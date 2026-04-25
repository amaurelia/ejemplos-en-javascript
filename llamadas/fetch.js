// generar un fetch de https://randomuser.me/api/?results=1

fetch('https://randomuser.me/api/?results=1')
  .then(response => {
    // esta es la respuesta sin procesar
    return response.json();
  })
  .then(data => {
    // data es el resultado de procesar la respuesta como JSON
    console.log(data);
    let usuario = data.results[0];
    
    // DATOS
    let nombre = `${usuario.name.first} ${usuario.name.last}`;
    let imagen = usuario.picture.medium;
    let correo = usuario.email;
    let fono = usuario.phone;
    let genero = usuario.gender;
    let pais = usuario.location.country;

    // mostrar datos en el HTML
    document.getElementById('nombre').textContent = `Nombre: ${nombre}`;
    document.getElementById('imagen').src = imagen;
    document.getElementById('correo').textContent = `Correo: ${correo}`;
    document.getElementById('fono').textContent = `Fono: ${fono}`;
    document.getElementById('genero').textContent = `Genero: ${genero}`;
    document.getElementById('pais').textContent = `Pais: ${pais}`;
    
  })
  .catch(error => {
    // en caso de que haya un error en la petición
    console.error('There was a problem with the fetch operation:', error);
  });
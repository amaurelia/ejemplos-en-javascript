
var req = new XMLHttpRequest();
let metodo = 'GET';
let endpoint = 'https://jsonplaceholder.typicode.com/todos/1';
let asincrono = true;
req.open( metodo,  endpoint,  asincrono);
req.onreadystatechange = function() {
  if (this.readyState == 4) { // solo cuando termina
    if (this.status == 200) {
      console.log('Éxito:');
      console.log("La respuesta es:", this.responseText);
      let respuestaJson = JSON.parse(this.responseText);
      console.log("titulo:", respuestaJson.title);
      document.getElementById('respuesta').textContent = respuestaJson.title;
    } else {
      console.log('Error');
    }

  }
};
let respuesta = req.send();

//variable para la sección donde se cargará el contenido de las tarjetas y otra para el link de la API
const tarjeta = document.getElementById('peliculasGH')
const urlGhibli = 'https://ghibliapi.vercel.app/films'


function cargarPeliculas() {
    //Se obtienen los datos de la API con fetch
    fetch(urlGhibli)
        //Se guarda el json
        .then(respuesta => respuesta.json())

        //y se cargan los datos dinamicamente con innerHTML
        .then(datos => {
            tarjeta.innerHTML = ""
            //Por cada elemento del array (cada película) se agrega una tarjeta al contenedor, el contenido del array se carga en el html con varibales tipo ${}
            datos.forEach(pelicula => {
                tarjeta.innerHTML += `
                    
                    <div class="card" style="width: 20rem;">
                        <img src="${pelicula.image}" class="card-img-top" alt="imagen de ${pelicula.title}">
                        <div class="card-body">
                            <h5 class="card-title">${pelicula.title}</h5>
                            <p class="card-text">-${pelicula.release_date}-</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">${pelicula.director}</li>
                            <li class="list-group-item">Puntuación: <span class="puntuacion">${pelicula.rt_score}</span></li>
                            
                        </ul>
                    </div>`;
            });

        });
}

//llamada a la función anterior
cargarPeliculas()
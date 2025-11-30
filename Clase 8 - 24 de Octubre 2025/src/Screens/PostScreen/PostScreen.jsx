import React, { useState, useEffect } from "react";
import PostCard from "../../Components/PostCard/PostCard";

const PostScreen = () => {
    //guarda la respuesta del servidor
    const [post_list, setPostList] = useState([]);
    //Guardamos el estado que indica si la consulta esta cargando o no
    const [post_list_loading, setPostListLoading] = useState(false);
    //Indica si hubo un error al resolver la consulta
    const [post_list_error, setPostListError] = useState(false);

    //Async 
    //Es la capacidad de delegar tareas bloqueantes para poder continuar la ejecucion del codigo hasta que dicha tarea sea resuelta y cuando esto suceda, poder seguir con ese flujo de codigo.
    //Viene a resolver un problema -> el bloqueo del hilo principal de ejecucion (main thread) en JS    


    //Promise -> es un objeto que JS usa para resolver codigo async 
    //basicamente tiene un estado interno que marca el estado de la promesa 
    // dicho estado puede ser: 
    // pendiente (pending),
    // cumplida(resolved),
    // rechazada(Rejected)

    //fetch nos permite hacer consultas HTTP a servidores externos
    // fetch es async por lo tanto devuelve una promesa
    // hay que pasarle a fetch la url del recurso al que queremos acceder
    async function cargarPosts() {
    try {
        //await -> le dice a JS que espere a que la promesa se resuelva para continuar con la ejecucion del codigo
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: "GET"
            }
        )
        // cargamos la respuesta como json
        const data = await respuesta.json()
        console.log(data);


    } catch (error) {
        console.error("Hubo un error al cargar los posts: ", error);
        setPostListError(error);
    } finally {
        setPostListLoading(false);
    }
}



    const [isOpen, setIsOpen] = useState(true);
    //useState maneja la recarga del componente 
    //useEffect maneja la recarga de una funcionalidad/función 

    useEffect(
        //funcionalidad a ejecutar -> el efecto accion a ejecutar
        () => {
        console.log("Efecto")
        },
    // array de dependencias
    // Una lista de valores que cuando cambiar harán que se vuelva a ejecutar la funcionalidad, cuándo hacemos que se vuelva a ejecutar
    //Si el array de dependencias está vacío, la funcionalidad solo se ejecuta una vez, cuando el componente se monta por eso Efecto se imprime una sola vez y Normal se imprime siempre
    []
    );

    useEffect(
        () => {
            cargarPosts();
        },
        []
    );

    console.log("Normal")

    /*
    Usar los estados:
        post_list -> para guardar los datos
        post_list_loading -> para saber si está cargando
        post_list_error -> para saber si hubo un error
    Para renderizar distintos estatus en la pantalla
    Por ejemplo -> 
        Si esta cargarndo debe decir cargando
        Si hay respuesta el map debe mapear la respuesta
        Si hay error mostrar por alerta el error.message
    
    */

    console.log(post_list, post_list_error, post_list_loading);

    const post_example = {
    userId: 1,
    id: 1,
    title: "mucho texto para el titulo",
    body: "demasiado texto para el body",
    };

  // Jsx list
  // const list = [
  //     <h1>Hola</h1>,
  //     <h1>Hola</h1>,
  //     <h1>Hola</h1>
  // ]


  //este seria el backend
    const post_list_example = [
    {
        userId: 1,
        id: 1,
        title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
    {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    },
    ];



    const lista_post_jsx = post_list_example.map((post) => (
    <div key={post.id}>
        <PostCard
            title={post.title}
            body={post.body}
            userId={post.userId}
        />
    </div>
));


  // map metodo avanzado de arrays para transformar un array en otro array
  // const nombre = [ 'pepe', 'juan', 'maria' ]
  // const iniciales_nombre = nombre.map(
  //     (nombre) => {
  //         let letra_inicial = nombre[0]
  //         return letra_inicial
  //     }
  // )
  //iniciales_nombre = [ 'h', 'h', 'h' ] si retorno 'h'

    return (
    <div>
        <h1>Posteos</h1>
      {/* Acá llamamos al <PostCard/> */}
        <button onClick={() => {setIsOpen(!isOpen)}}>{isOpen ? 'Cerrar' : 'Abrir'}</button>
        {lista_post_jsx}
    </div>
    );
};

export default PostScreen;


//se intenta ejecutar el codigo
        // try{
        //     let nombre = ''
        //     if(!nombre){
        //         // Throw hace que se lance un error al catch mas cercano
        //         throw {message: 'El nombre esta vacio'}
        //     }
        // } catch (error){
        //     //si hay un error se ejecuta este bloque
        //     console.error('hubo un error, razon: ' + error.message)
        // }
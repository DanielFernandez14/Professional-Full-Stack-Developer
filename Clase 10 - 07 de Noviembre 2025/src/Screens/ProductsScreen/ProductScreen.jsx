import React from 'react'
import { getAllProducts } from '../../services/productsService';
import { useState, useEffect } from 'react';


const ProductScreen = () => {

  /*
    Tener un estado que gestione el listado de productos -> viene de una api y transfiere por HTTP -> son operaciones propensas al fallo
    -> habria que tener tres estados que maneje los errores -> Uno de respuesta, Uno de Error y otro Cargando.
  */
  /*
    Para ello crearemos tres estados:
    - isLoading -> boolean -> true/false  -> false por defecto
    response default null o array -> null por defecto
    - error -> null o string -> null por defecto
  */
  /*
    Crear una funcion llamada sendRequest(requestFunction)
  */

    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);



    /* Send Request se encargara de manejar los estados de consulta (response, loading y error.) */
    async function sendRequest(requestCallback) {
      try {
        //como vamos a resolver una consulta al servidor marcamos como true el estado de carga
        setIsLoading(true);
          const response = await requestCallback();
          //Una vez que tenemos la respuesta del servidor la guardamos en el estado de response/respuesta
          setResponse(response);
      } catch (error) {
        //Si hay un error lo guardamos en el estado de error
        console.error('Error al realizar la solicitud:', error);
      } finally {
        //Pase lo que pase, al final de la operacion, marcamos como false el estado de carga. que se termino la carga.
        setIsLoading(false);
      }
    }



    /* Encargadas de solicitar al servidor */
function loadProducts() {
  //Llamamos a sendRequest pasandole la funcion que queremos que ejecute
  sendRequest(getAllProducts)
}
  
    
    useEffect(
    loadProducts, [] // solo ejecutar una vez al montar el componente
    )

    console.log({isLoading, response, error});
  

  return (
    <div>
      ProdcutsScreens
    </div>
  )
}



export default ProductScreen

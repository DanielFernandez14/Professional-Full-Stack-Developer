import React, { useReducer } from 'react'
import { getAllProducts } from '../../services/productsService';
import { useEffect } from 'react';
import useRequest from '../../hooks/useRequest';
import ProductList from '../../Components/ProductList/ProductList';


const ProductScreen = () => {

  const {
    isLoading,
    response,
    error,
    sendRequest
  } = useRequest();

  /*
    Tener un estado que gestione el listado de productos -> viene de una api y transfiere por HTTP -> son operaciones propensas al fallo
    -> habria que tener tres estados que maneje los errores -> Uno de respuesta, Uno de Error y otro Cargando.
  */
  

    /* Encargadas de solicitar al servidor */
function loadProducts() {
  //Llamamos a sendRequest pasandole la funcion que queremos que ejecute
  sendRequest(getAllProducts)
}
  
    
    useEffect(
    loadProducts, [] // solo ejecutar una vez al montar el componente
    )

    console.log('Cargando... ', isLoading, 'Respuesta del servidor... ', response, "Error... ", error);


  return (
    <div>
      <h1>Catalogo de Productos</h1>
      {
        isLoading 
        ? <span>Cargando...</span>
        : (
          error
          ? <span style={{color: 'red'}}> {error} </span>
          : <ProductList products={response}/>
        )
      }
    </div>
      
  )
}



export default ProductScreen

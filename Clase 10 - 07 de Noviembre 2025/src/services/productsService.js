import { collection, getDocs } from "firebase/firestore";
import { database } from "../config/firebaseConfig.js";


const COLLECTIONS = {
    PRODUCTS: "productos"
};
async function getAllProducts() {
    //Selecciona la coleccion que vamos a consumir
    const products_collections_references = collection (database, COLLECTIONS.PRODUCTS);
    //llama a todos los documentos de esa coleccion
    
    const result = await getDocs(products_collections_references)

    // Lista de documentos resultantes
    // result.docs
    // por cada documento si queremos acceder a su contenido debemos ejecutar el metodo .data() -> .data extrae los campos del documento
    const products = result.docs.map( 
        (document) => {
            const data = document.data();
        //extraigo todos los campos del documento excepto el id
            return {
                id: document.id,
                ...data // Propago en el nuevo objeto el resto de propiestades de data
            }
        } 
    );
    return products;
}


export { getAllProducts };
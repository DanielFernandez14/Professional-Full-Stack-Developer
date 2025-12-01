import ProductCard from "../ProductCard/ProductCard";

//idealemente luego este componente deberia estar en la carpeta de Components
function ProductList({products}) {
    //si no hay productos devolver null
    if(!products){
        return null 
    }
    //Si la lista esta vacia mostrar un mensaje de error
    if(products.length === 0){
        return <span>No hay productos para mostrar</span>
    }
    // Si esta todo bien hacer el mapeo de product card
    return products.map(
        (product) => {
            return <ProductCard key={product.id} product={product}/>;
            }
        )

  // renderizar la lista de productos recibida por props
}

// Idealmente deberia exisir el <productCard /> para renderizar cada producto individualmente

export default ProductList;
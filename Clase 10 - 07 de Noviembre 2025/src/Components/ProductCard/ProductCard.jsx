import "./ProductCard.css";

function ProductCard({ product }) {
    return (
        <div className="card">
            <img src={product.imagen} alt={product.nombre} />
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
            <p className="price">Price: ${product.precio}</p>

            <button className="btn-buy">Comprar</button>
            <hr />
        </div>
    );
}

export default ProductCard;

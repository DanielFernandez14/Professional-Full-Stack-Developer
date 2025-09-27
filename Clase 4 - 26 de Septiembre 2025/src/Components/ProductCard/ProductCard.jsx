import './ProductCard.css'

function ProductCard(props) {

    //props es un objeto que contiene todas las propiedades que le pasamos al componente

    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <span>Precio USD ${props.price}</span>
            <button className="btn-Product-Card">Compra YA!</button>
        </div>
    )
}

export { ProductCard }
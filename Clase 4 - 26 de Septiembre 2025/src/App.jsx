import React from 'react'
import { MyComponent } from './Components/MyComponent/MyComponent'
import { ProductCard } from './Components/ProductCard/ProductCard'

function App() {


  /*
  Los archivos de JSX tiene un nuevo tipo de dato llamdo componente, muy parecido a HTML
  Los componentes son funciones que retornan este JSX
  Los componentes deben ser llamados con mayuscula
  
  */
  return (
    <div>
      <h1>Hola mundo</h1>
      <MyComponent />


      <ProductCard 
      price={1600}
      title={"Tv Samsung 52\""}
      description={"Una tv para el mundial"}
      />
      <ProductCard 
      price={1200}
      title={"Tv Samsung 42\""}
      description={"Una tv para el mundial"}
      />
      <ProductCard 
      price={800}
      title={"Proyector"}
      description={"Proyector 4k para el mundial"}
      />
    </div>
  )
}
export default App


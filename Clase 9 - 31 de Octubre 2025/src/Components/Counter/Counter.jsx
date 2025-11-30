import React, { useState } from 'react';

function Counter({ limite = 10, minimo = 0, initial = 0 }) {
    const [contador, setContador] = useState(initial);

    function incrementarContador() {
        if (contador < limite) {
            setContador(contador + 1);
            console.log('El valor de contador es:', contador + 1);
        }
    }

    function decrementarContador() {
        if (contador > minimo) {
            setContador(contador - 1);
            console.log('El valor de contador es:', contador - 1);
        }
    }

    return (
        <div>
            <h1>Estados</h1>
            
            <button 
                onClick={decrementarContador} 
                disabled={contador <= minimo}
            >
                -
            </button>

            <span>{contador}</span>

            <button 
                onClick={incrementarContador} 
                disabled={contador >= limite}
            >
                +
            </button>

            {contador <= minimo && (
                <p style={{ color: 'red' }}>
                    El contador es menor o igual a {minimo}
                </p>
            )}

            {contador >= limite && (
                <p style={{ color: 'red' }}>
                    El contador es mayor o igual a {limite}
                </p>
            )}
        </div>
    );
}

export default Counter;

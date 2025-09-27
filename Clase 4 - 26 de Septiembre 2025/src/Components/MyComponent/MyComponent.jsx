function MyComponent() {
    const handleClick = () => {
        alert('Hiciste click')
    }
    return (
    <button onClick={handleClick}>
        Mi componente
    </button>
    )
    
}

export { MyComponent }
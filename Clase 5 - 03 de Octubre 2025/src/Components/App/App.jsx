import Counter from '../Counter/Counter';

function App() {
    return (
        <div>
            <Counter limite={10} minimo={0} initial={1} />
            <Counter limite={15} minimo={4} initial={6} />
            <Counter limite={100} minimo={0} initial={50} />
        </div>
    );
}

export default App;

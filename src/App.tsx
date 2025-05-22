import './App.css';
import './components/Stars/Stars.css';
import { Stars } from './components/Stars';

function App() {
    const stars: number = 4;

    return (
        <>
            <Stars count={stars} />
        </>
    );
}

export default App;
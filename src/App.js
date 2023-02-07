import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Cart from './pages/Cart';
import Counter from './pages/Counter';

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
}

export default App;

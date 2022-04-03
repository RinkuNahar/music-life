import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';
import HomePage from './components/HomePage/HomePage';
import Product from './components/Product/Product';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          {/* <Route path='/' element={<Product></Product>}></Route> */}
        </Routes>
    </div>
  );
}

export default App;

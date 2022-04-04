import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';
import HomePage from './components/HomePage/HomePage';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/reviews' element={<Review></Review>}></Route>
        </Routes>
    </div>
  );
}

export default App;

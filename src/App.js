import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Heading from './components/Heading/Heading';
import HomePage from './components/HomePage/HomePage';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Heading></Heading>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/reviews' element={<Review></Review>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
    </div>
  );
}

export default App;

import {Routes, Route} from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';
import Navbar from './components/Navbar';
import RequiereAuth from './components/RequiereAuth';
const App = () => {
  return (
    <>
    <h1>APP</h1>
    <Navbar/>
    <Routes>
      
      <Route path="/" element={
        <RequiereAuth>
          <Home />
        </RequiereAuth>
      }
      />
      <Route path="/login" element={<Login />}/>
    </Routes>
    </>
  );
  
}

export default App;

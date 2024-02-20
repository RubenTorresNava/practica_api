import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Inicio</h1>}/>
        <Route path="/login" element={<h1>Login</h1>}/>
        {/* <Route path="/register" element={<RegisterPage/>}/> */}
        <Route path="/products" element={<h1>Productos</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

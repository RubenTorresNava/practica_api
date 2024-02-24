import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import Home from './pages/Home';
import Insertproduct from './pages/Insertproduct';
import Insertdealer from './pages/Insertdealer';
function app() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} />
            <Route path="/Insertproduct" element={<Insertproduct />}/>
            <Route path="/Insertdealer" element={<Insertdealer />}/>
        </Routes>
    </BrowserRouter>
  );
}
export default app;
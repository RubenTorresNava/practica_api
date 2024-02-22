import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
function app() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='"/" 'element={<h1>Home</h1>} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/register" element={<Registerpage />} />
        </Routes>
    </BrowserRouter>
  );
}
export default app;
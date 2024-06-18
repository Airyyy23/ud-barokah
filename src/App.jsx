import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/navbar/index';
import Footer from './components/common/footer';
import Homepage from './pages/home';
import Product from './pages/product';
import NotFound from './pages/error/notFound';

function App() {
  return (
    <Router>
      <div className="h-screen relative flex flex-col justify-between items-center">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/product" element={<Product />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

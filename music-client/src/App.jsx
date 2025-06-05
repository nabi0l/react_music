import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from "./contexts/cartContext";
import Footer from './ui/navigation/Footer';
import Navbar from './ui/navigation/Navbar';

// Pages
import Genre from './pages/catalog/genres/Genre';
import Artist from './pages/catalog/artists/Artist';
import Albums from './pages/catalog/albums/Albums';
import Singles from './pages/catalog/singles/Singles';
import Playlists from './pages/catalog/playlists/Playlists';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Store from './pages/store/Store';
import Contact from './pages/contact/Contact';
import Cart from './pages/cart/Cart';
import Favorites from './pages/profile/favorites/Favorites'; // Add this if you want favorites page
import Terms from './pages/terms/Terms';
import Privacy from './pages/privacy/Privacy';

import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';

import './index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog/genres" element={<Genre />} />
          <Route path="/catalog/artists" element={<Artist />} />
          <Route path="/catalog/albums" element={<Albums />} />
          <Route path="/catalog/singles" element={<Singles />} />
          <Route path="/catalog/playlists" element={<Playlists />} />
          <Route path="/store" element={<Store />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path="/favorites" element={<Favorites />} /> {/* Add this if you want favorites page */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
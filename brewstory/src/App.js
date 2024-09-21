import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Navbar from './components/Navbar';
import HomePage from './pages';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { AuthProvider } from './auth/AuthContext';
import MenuOne from './components/MenuOne';
import MenuTwo from './components/MenuTwo';
import MenuThree from './components/MenuThree';
import MenuFour from './components/MenuFour';
import MenuFive from './components/MenuFive';
import d1 from './assets/Images/products/d1.webp'
import d2 from './assets/Images/products/d2.webp'
import d3 from './assets/Images/products/d3.webp'
import d4 from './assets/Images/products/d4.webp'
import d5 from './assets/Images/products/d5.webp'
import d6 from './assets/Images/products/d6.webp'
import p1 from './assets/Images/products/d1.webp'
import p2 from './assets/Images/products/d1.webp'
import p3 from './assets/Images/products/d1.webp'
import p4 from './assets/Images/products/d1.webp'
import p5 from './assets/Images/products/d1.webp'
import ProtectedRoute from './auth/ProtectedRoute';
import Testing from './components/Testing';

function App() {

  let products = [
    {
      image: `${d1}`,
      calK: "300 Kcal",
      name: "Veronica's Toffee Nut Crunch Latte",
      currentPrice: "414.75",
      orignalPrice: "500.75",
      discount: "20% Off",
    },
    {
      image: `${d2}`,
      calK: "280 Kcal",
      name: "Caramel Macchiato",
      currentPrice: "350.50",
      orignalPrice: "420.00",
      discount: "16% Off",
    },
    {
      image: `${d3}`,
      calK: "320 Kcal",
      name: "Hazelnut Praline Latte",
      currentPrice: "480.25",
      orignalPrice: "550.00",
      discount: "12% Off",
    },
    {
      image: `${d4}`,
      calK: "250 Kcal",
      name: "Peppermint Mocha",
      currentPrice: "395.00",
      orignalPrice: "450.00",
      discount: "12% Off",
    },
    {
      image: `${d5}`,
      calK: "280 Kcal",
      name: "Chestnut Praline Latte",
      currentPrice: "440.50",
      orignalPrice: "520.00",
      discount: "15% Off",
    },
    {
      image: `${d6}`,
      calK: "310 Kcal",
      name: "Toasted White Chocolate Mocha",
      currentPrice: "465.75",
      orignalPrice: "550.00",
      discount: "15% Off",
    },
    {
      image: `${p1}`,
      calK: "290 Kcal",
      name: "Vanilla Sweet Cream Cold Brew",
      currentPrice: "380.00",
      orignalPrice: "450.00",
      discount: "16% Off",
    },
    {
      image: `${p2}`,
      calK: "270 Kcal",
      name: "Irish Cream Cold Brew",
      currentPrice: "390.25",
      orignalPrice: "480.00",
      discount: "18% Off",
    },
    {
      image: `${p3}`,
      calK: "300 Kcal",
      name: "Maple Pecan Latte",
      currentPrice: "420.50",
      orignalPrice: "500.00",
      discount: "16% Off",
    },
    {
      image: `${p4}`,
      calK: "260 Kcal",
      name: "Pumpkin Spice Latte",
      currentPrice: "380.75",
      orignalPrice: "450.00",
      discount: "15% Off",
    },
    {
      image: `${p5}`,
      calK: "260 Kcal",
      name: "pice Latte",
      currentPrice: "480.75",
      orignalPrice: "550.00",
      discount: "15% Off",
    },
  ];


  document.addEventListener("copy", function (e) {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Drink Coffee! but dont' copy :)");
  });

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<ProtectedRoute> <Home /> </ProtectedRoute>}>
            <Route path='/home/menu-one' element={<ProtectedRoute> <MenuOne /> </ProtectedRoute>} />
            <Route path='/home/menu-two' element={<MenuTwo />} />
            <Route path='/home/menu-three' element={<MenuThree />} />
            <Route path='/home/menu-four' element={<MenuFour />} />
            <Route path='/home/menu-five' element={<MenuFive />} />
          </Route>
          <Route path='/categories' element={<ProtectedRoute> <Categories items={products} /> </ProtectedRoute>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/testing' element={<Testing />} />
          <Route path='/account' element={<Account />}>
            <Route path='/account/login' element={<Login />} />
            <Route path='/account/register' element={<Register />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

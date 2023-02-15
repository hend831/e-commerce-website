import Header from "./components/header/Header";
import ProductItem from "./components/products/ProductItem"
import Banner from "./components/banner/Banner";
import Footer from './components/footer/Footer'
import Productt from "./components/product/Productt";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";


function App() {
  return (
    
    <>
    <Header/>
    <Banner/>
    
    <Productt/>
    
    <ProductItem  />
    <About/>
    <Contact/>
    
    <Footer/>

    </>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer/Footer';
import Product from './components/showProduct/Product';
import ProductContextProvider from './context/product-contex';
import InfoStore from './components/header/InfoStore';
const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <InfoStore/>
        <Product/>
        <Footer />
      </ProductContextProvider>
    </div>
  )
}

export default App;

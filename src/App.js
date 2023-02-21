import './App.css';
import Footer from './components/Footer/Footer';
import Product from './components/showProduct/Product';
import ProductContextProvider from './context/product-contex';

const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <Product/>
        <Footer />
      </ProductContextProvider>
    </div>
  )
}

export default App;

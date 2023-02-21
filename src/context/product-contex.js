import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [dataProducts, setDataProduct] = useState({
        data:'string',
    });

    return (
        <ProductContext.Provider value={{ dataProducts, setDataProduct }}>
            {children}
        </ProductContext.Provider>
    );
};

ProductContextProvider.propTypes = {
    children: PropTypes.oneOfType(
        [PropTypes.object, PropTypes.arrayOf(PropTypes.element)]),
}

export default ProductContextProvider;

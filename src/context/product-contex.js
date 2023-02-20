import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [dataProduct, setDataProduct] =useState({});

    return (
        <ProductContext.Provider value={{ dataProduct, setDataProduct }}>
            {children}
        </ProductContext.Provider>
    )
}
ProductContextProvider.propTypes = {
    children: PropTypes.oneOfType(
        [PropTypes.object, PropTypes.arrayOf(PropTypes.element)]).isRequired,
}

export default ProductContextProvider;

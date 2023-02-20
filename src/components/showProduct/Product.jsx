import style from './products.module.css'
import EachProduct from './EachProduct';
import { useContext, useEffect, useState } from 'react';
// import { ProductContext } from '../../context/product-contex';


const Product = () => {
    // const { dataProduct } = useContext(ProductContext);
    const [productInf, setProductInf] = useState({})
    
    // useEffect(() => {
    //     setProductInf(dataProduct)
    // }, [dataProduct])

    const showProduct = () => {
        return (
        <>heegh
        </>
        )
    }
    return (
        <div>
            {Object.keys(productInf).length > 0 && showProduct()}
            <div className={style.showProductComponents}>
                <EachProduct higLimit={8} lowLimit={4} title={'COMPLETA TU LOOK'}/>
                <EachProduct higLimit={4} lowLimit={0} title={'PRODUCTOS RECOMENDADOS'}/>
            </div>
        </div>
    )
}
export default Product;
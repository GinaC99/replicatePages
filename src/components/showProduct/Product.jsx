import style from './products.module.css'
import EachProduct from './EachProduct';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from './../../context/product-contex';
import { LoremIpsum } from 'react-lorem-ipsum';

const Product = () => {
    const { dataProducts } = useContext(ProductContext);
    const [productInf, setProductInf] = useState({})
    
    useEffect(() => {
        console.log(dataProducts)
        if (dataProducts && Object.keys(dataProducts).length > 0)
            return setProductInf(dataProducts)
    }, [dataProducts])
    console.log(dataProducts)

    const showProduct = () => {
        return (
        <>
        </>
        )
    }
    return (
        <div>
            <div className={style.showProductComponents}>
                <div>
                    {Object.keys(productInf).length > 0 && showProduct()}
                </div>
                    <div className={style.containerTitle}>
                        <h3 className={style.genTitle}>DETALLES DEL PRODUCTO</h3>
                    </div>
                    <LoremIpsum p={1}/>
                <div>
                
                </div>
                <div>
                    <div className={style.containerTitle}>
                        <h3 className={style.genTitle}>TECNOLOGIAS</h3></div>
                    <LoremIpsum p={1}/>
                </div>
                <EachProduct higLimit={8} lowLimit={4} title={'COMPLETA TU LOOK'}/>
                <EachProduct higLimit={4} lowLimit={0} title={'PRODUCTOS RECOMENDADOS'}/>
            </div>
        </div>
    )
}
export default Product;
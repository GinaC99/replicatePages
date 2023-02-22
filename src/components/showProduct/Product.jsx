import style from './products.module.css'
import EachProduct from './EachProduct';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from './../../context/product-contex';
import { LoremIpsum} from 'react-lorem-ipsum';
import Typography from '@mui/material/Typography';

const Product = () => {
    const { dataProducts } = useContext(ProductContext);
    const [productInf, setProductInf] = useState({})
    
    useEffect(() => {
        console.log(dataProducts)
        if (dataProducts && Object.keys(dataProducts).length > 0)
            return setProductInf(dataProducts)
    }, [dataProducts])

    const showProduct = () => {
        if (productInf) {
            const { nombre, precio, referencia, foto } = productInf;
            console.log(productInf)
            return (
                <div className={style.container__infProducts}>
                    <div className={style.infoProducts__img_name}>
                        <h5>HUSHPUPPIESCO / CALZADO / {nombre}</h5>
                        <img src={foto} alt={'foto-calzado'} />
                    </div>
                    <div>
                        <h3>{nombre}</h3>
                        <Typography variant="body1" className={style.price__products__infProduct}>
                        $ {precio}
                        </Typography>
                        <Typography variant="body1" className={style.infProduct__ref}>
                        Cod. de productos {referencia}
                        </Typography>
                        <h5>COLOR</h5>
                        <img src={foto} alt={'foto-calzado'} className={style.img_Productss}/>
                        <h5>TALLA</h5>
                        <div className={style.containerAllNumbers}>
                            <div style={{ gap: '10px' }}>
                                <div className={style.NumberShow} onClick={() => {
                                    alert('Se encuentra disponible')
                                }}>5</div>
                                <div className={style.NumberShow}>5.5</div>
                                <div className={style.NumberShow}>6</div>
                                <div className={style.NumberShow}>6.5</div>
                                <div className={style.NumberShow}>7</div>
                            </div>
                            <div style={{ gap: '10px' }}>
                                <div className={style.NumberShow}>7.5</div>
                                <div className={style.NumberShow}>8</div>
                                <div className={style.NumberShow}>8.5</div>
                                <div className={style.NumberShow}>9</div>
                                <div className={style.NumberShow}>9.5</div>
                            </div>
                        </div>
                        <h6>GUIA DE TALLAS</h6>
                        <button>AÑADIR AL CARRITO</button>
                        <button>icon</button>
                    </div>
                </div>
            )
        }
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
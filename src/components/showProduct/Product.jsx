import style from './products.module.css'
import EachProduct from './EachProduct';
import { useContext, useEffect, useState } from 'react';
import { ProductContext } from './../../context/product-contex';
import { LoremIpsum} from 'react-lorem-ipsum';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import infImgs from '../../api/imgs';

const Product = () => {
    const { dataProducts } = useContext(ProductContext);
    const [productInf, setProductInf] = useState({})
    
    useEffect(() => {
        if (dataProducts && Object.keys(dataProducts).length > 0)
            return setProductInf(dataProducts)
        else setProductInf(infImgs[0])
    }, [dataProducts])

    const showProduct = () => {
        if (productInf) {
            const { nombre, precio, referencia, foto } = productInf;
            const randomImg = [];
            for (let i = 0; i < 6; i++){
                randomImg.push(<img alt={'foto-calzado'}
                    src={infImgs[Math.floor(Math.random()*infImgs.length)].foto}
                    style={{ height: '60px' }}
                />)
            }
            return (
                <div className={style.container__infProducts}>
                    <div className={style.infoProducts__img_name}>
                        <h5>HUSHPUPPIESCO / CALZADO / {nombre}</h5>
                        <img src={foto} alt={'foto-calzado'}  style={{ padding: '0px 20% 0px 20%'}}/>
                        <div className={style.container_randomImgs}>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'start',gap: '5px'}}>
                            {randomImg.map((media) => media)}
                        </div>
                    </div>
                    <div/>
                    <div>
                        <h3 style={{ color: '#666666', fontWeight: 'bold', fontSize: '20px', marginBottom:'0px'}}>
                            {nombre && nombre.toUpperCase()}</h3>
                        <Typography variant="body1" className={style.price__products__infProduct}>
                        ${precio}
                        </Typography>
                        <Typography variant="body1" className={style.infProduct__ref}>
                        Cod. de productos {referencia}
                        </Typography>
                        <h5 style={{ marginBottom: '0px'}}>COLOR</h5>
                        <img src={foto} alt={'foto-calzado'} className={style.img_Productss}/>
                        <div className={style.containerAllNumbers}>
                                <h5 style={{ margin: '5px 0px 0px 0px'}}>TALLA</h5>
                            <div style={{ paddingBottom: '1px', marginTop: '0px'}}>
                                <div className={style.NumberShow} onClick={() => {
                                    alert('Se encuentra disponible')
                                }}>5</div>
                                <div className={style.NumberShow}>5.5</div>
                                <div className={style.NumberShow}>6</div>
                                <div className={style.NumberShow}>6.5</div>
                                <div className={style.NumberShow}>7</div>
                            </div>
                            <div style={{ paddingTop: '5px'}}>
                                <div className={style.NumberShow}>7.5</div>
                                <div className={style.NumberShow}>8</div>
                                <div className={style.NumberShow}>8.5</div>
                                <div className={style.NumberShow}>9</div>
                                <div className={style.NumberShow}>9.5</div>
                            </div>
                        </div>
                        <h6>GUIA DE TALLAS</h6>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px'}}>
                            <button className={style.styleButton}>AÑADIR AL CARRITO</button>
                            <button style={{ background: 'transparent', borderColor: 'transparent'}}>
                                <FavoriteIcon style={{ color: '#D1D1D0', fontSize: '20px'}}/>
                            </button>
                        </div>
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
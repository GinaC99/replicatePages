import style from './products.module.css'
import EachProduct from './EachProduct';

const Product = () => {
    
    return (
        <div className={style.showProductComponents}>
            <EachProduct higLimit={8} lowLimit={4} title={'COMPLETA TU LOOK'}/>
            <EachProduct higLimit={4} lowLimit={0} title={'PRODUCTOS RECOMENDADOS'}/>
        </div>
    )
}
export default Product;
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import infImgs from '../../api/imgs'
import { useContext, useEffect, useState } from "react";
import style from './products.module.css'
import { ProductContext } from '../../context/product-contex';

const EachProduct = ({ lowLimit, higLimit, title }) => {
    const [limitInf, setLimitInf] = useState(0)
    const [limitSup, setLimitSup] = useState(4)
    const { dataProduct, setDataProduct } = useContext(ProductContext)
    useEffect(() => {
        setLimitInf(parseInt(lowLimit))
        setLimitSup(parseInt(higLimit))
    }, [lowLimit, higLimit])

    const showProducts = () => {
        
        return infImgs.map((objectInfo, index) => {
            const randomImg = [];
            for (let i = 0; i < 3; i++){
                randomImg.push(<CardMedia
                    component="img"
                    image={infImgs[Math.floor(Math.random()*infImgs.length)].foto}
                    sx={{ width: '32%', height: '50px'}}
                />)
            } 
            const {nombre, precio, referencia, foto} = objectInfo;
            if (index > limitInf && index <= limitSup) {
            return (
                <Card sx={{ width: '22%' }} key={index} onClick={() => {
                    setDataProduct(objectInfo)
                }}>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        height={'200'}
                        image={foto}
                        alt={referencia}
                    />
                    <CardContent className={style.descriptions__products}>
                        <Typography gutterBottom variant="h5" component="div" className={'products_title'}>
                        {nombre}
                        </Typography>
                        <Typography variant="body1" className={style.price__products}>
                        $ {precio}
                        </Typography>
                        <div className={style.imgs_descriptions}>
                            {randomImg.map((media) => media)}
                        </div>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    {parseInt(lowLimit) === 4
                        &&
                        <Button className={style.button__add}>
                            AGREGAR AL CARRITO
                        </Button> 
                    }
                    </CardActions>
                </Card>
            )
        }
        })
    }
    return (
        <div>
            <h3 className={parseInt(lowLimit) === 4
                ? style.title
                : style.genTitle}>{title}</h3>
            <div className={style.containerProducts}>
                {showProducts()}
            </div>
        </div>
        
    )
}
EachProduct.propTypes  = {
    higLimit: PropTypes.number,
    lowLimit : PropTypes.number,
    title: PropTypes.string.isRequired,
}
export default EachProduct;
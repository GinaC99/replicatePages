import Typography from '@mui/material/Typography';
import enterpriseInfo from '../../api/enterpriseInfo';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import style from './enterprise.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Enterprise = () => {

    const showTitles = () => {
        return Object.keys(enterpriseInfo).map((nameKey, index) => {
            const { title, data } = enterpriseInfo[nameKey]
            return (
                <div style={{ margin: '0px 20%'}} key={index}>
                    <li> 
                        <h4 style={{ color: '#333333' }}>{title}</h4>
                        {data.map((nameDescription, key) => {
                        return (
                        <p key={index + key} style={{ color:'#5E5E5E' }}>{nameDescription}</p>
                    )})}            
                    </li>
                </div>
            )
            
        })
    }

    return (
        <div>
            <div className={style.info_enterprise}>
                <h3>@HUSHPUPPIESCO</h3>
                <div className={style.info_enterprise__icons}>
                    <FacebookIcon/>
                    <InstagramIcon/>
                </div>
            </div>
            <div className={style.container__enterprise}>
                {showTitles()}
                <div>
                    <li>
                        <h4 style={{ color: '#333333' }}>NEWSLETTER</h4>
                        <Typography style={{ color:'#5E5E5E' }}>Registrate para ser el primero en recibir nuestras noticias</Typography>
                        <button className={style.action__button}>
                            <Typography>EMAIL</Typography>
                            <ArrowForwardIosIcon/>
                        </button>
                    </li>
                </div>
            </div>
        </div>
    )
}
export default Enterprise;
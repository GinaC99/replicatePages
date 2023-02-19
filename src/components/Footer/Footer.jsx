import style from './footer.module.css'
import Enterprise from '../ContactInfo/Enterprise';

const Footer = () => {
    return (
        <>
            <div className={style.container__elementsFooter}> 
                <Enterprise/>
            </div>
        </>
    )
}
export default Footer;
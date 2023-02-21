import style from './infoStore.module.css'
import logo from './../../img/12.jpg'
const InfoStore = () => {
    return (
        <div>
            <div className={style.firstLetter}>HOT SALE -30% EN SANDALIAS </div>
            <div className={style.secondLetter}>
                <h6>DIRECTORIO DE TIENDAS</h6>
                <h6>SERVICIO AL CLIENTE</h6>
                <h6>MI CUENTA</h6>
            </div>
            <div className={style.lastLetter}>
                <div>
                    <img src={logo} alt={'logo_empresa'} className={style.img}/>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default InfoStore;
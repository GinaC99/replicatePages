import style from './infoStore.module.css'
import logo from './../../img/12.jpg'
const InfoStore = () => {
    return (
        <div style={{ maxHeight: '500px', margin: '0px'}}>
            <div className={style.firstLetter}>HOT SALE -30% EN SANDALIAS </div>
            <div className={style.secondLetter}>
                <h6>DIRECTORIO DE TIENDAS</h6>
                <h6>SERVICIO AL CLIENTE</h6>
                <h6>MI CUENTA</h6>
            </div>
            <div className={style.lastLetter}>
                <div style={{ padding: '0px 5%'}}>
                    <img src={logo} alt={'logo_empresa'} className={style.img}/>
                </div>
            </div>
        </div>
    )
}
export default InfoStore;
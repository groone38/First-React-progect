import './One.css';
import stud from './img/stud.svg';

function One() {
    return(
        <div className="wrap">
            <h2>Записаться</h2>
            <div className="One">
                <form action="" className="form">
                    <div className="form-name">
                        <label htmlFor="name">Ваше имя</label>
                        <input type="text" htmlFor="name" placeholder="Введите ваше имя"/>
                    </div>
                    <div className="form-tel">
                        <label htmlFor="tel">Укажите номер телефона</label>
                        <input type="number" name="tel" placeholder="8955855558" />
                    </div>
                    <div className="form-area">
                        <label htmlFor="text">Дополнительная информация</label>
                        <textarea name="text" id="" cols="30" rows="10"></textarea>
                    </div>
                    <button className="btn">Отправить</button>
                </form>
                <img src={stud} alt="" />
            </div>
        </div>
    )
}

export default One;
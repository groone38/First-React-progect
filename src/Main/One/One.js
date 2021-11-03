import './One.css';
import stud from './img/stud.svg';

function One() {
    return(
        <div className="wrap">
            <h2>Записаться</h2>
            <div className="one__conteiner">
                <form action="http://localhost:3001/example" method="POST" className="conteiner__form">
                    <div className="conteiner__form name">
                        <label htmlFor="name">Ваше имя</label>
                        <input type="text" name="name" placeholder="Введите ваше имя"/>
                    </div>
                    <div className="conteiner__form name">
                        <label htmlFor="email">Ваш email</label>
                        <input type="text" name="email" placeholder="Введите ваш email"/>
                    </div>
                    <div className="conteiner__form tel">
                        <label htmlFor="tel">Укажите номер телефона</label>
                        <input type="number" name="tel" placeholder="8955855558" />
                    </div>
                    <div className="conteiner__form area">
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
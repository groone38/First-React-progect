import React from "react";
import { useState } from 'react';
import './Chat.css';

function Chat() {
    const [mes, setMes] = useState([]);
    let myRef = React.createRef();

    let sendMessege = () => {
        let mesCurrent = myRef.current.value;
        let mesCurrentValue = [...mes, mesCurrent];
        setMes(mesCurrentValue);
        myRef.current.value = '';
    }

    return(
        <div className="wrap">
            <h1>Давай пообщаемся?</h1>
            <div className="chat">
                <div className="block-mes">
                    <ul className="mes">
                        {mes.map((item, index) => <div key={index.toString()} className="list">{item}</div>)}
                    </ul>
                </div>
                <div className="send">
                    <textarea ref={myRef} className="textarea" rows="10"></textarea>
                    <button onClick={sendMessege} className="btn-mes">Send</button>
                </div>
                
            </div>
        </div>
    )
}

export default Chat;
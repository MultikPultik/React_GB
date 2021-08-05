import './App.css';
import { Message } from './components/message/Message.js';
import { useState, useEffect } from "react";

export function App(props) {
  const [messageList, setMessagesList] = useState([
    { name: 'Bot', msg: 'Привет, это Bot!' },
  ]);

  const [value, setValue] = useState('');

  function sendMessage() {
    setMessagesList((state) => [...state, { name: 'Дмитрий', msg: value }]);
    setValue('');
  }

  useEffect(() => {
    const prevMessage = messageList[messageList.length - 1];
    console.log(prevMessage);

    if (prevMessage.name === 'Дмитрий') {
      setTimeout(() => {
        setMessagesList((state) => [
          ...state, 
          {name: 'Bot', msg: 'Я еще не настроен... Извини не могу пообщаться :(('},
        ])
      }, 1000)
    }
  }, [messageList]);

  return (
    <div className="App">
      <div className="App-wrap">
        <Message messageList = {messageList}/>
        <div className='App-footer'>
          <input
            className='Input-msg'
            placeholder='Введите сообщение'
            value={value}
            onChange={(ev) => setValue(ev.target.value)}
          />
          <button
            className='Btn-msg'
            onClick={sendMessage}
          >
            Отправить
          </button>
        </div>
      </div>
    </div>
  )
}
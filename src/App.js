import './App.css';
import { Message } from './components/message/Message.js';
import { useState, useEffect } from "react";

export function App(props) {
  const [messages, setMessages] = useState([
    { name: 'Bot', msg: 'Привет, это Bot!' },
  ]);

  const [value, setValue] = useState('');

  function sendMessage() {
    setMessages((state) => [...state, { name: 'Дмитрий', msg: value }]);
    setValue('');
  }

  useEffect(() => {
    const prevMessage = messages[messages.length - 1];
    console.log(prevMessage);

    if (prevMessage.name === 'Дмитрий') {
      setTimeout(() => {
        setMessages((state) => [
          ...state, 
          {name: 'Bot', msg: 'Я еще не настроен... Извини не могу пообщаться :(('},
        ])
      }, 1000)
    }
  }, [messages]);

  return (
    <div className="App">
      <div className="App-wrap">
        <div className="App-content">
          {messages.map((message, id) => (
            <div key={id} className='Wrap-msg'>
              <div className='Header-msg'>
                {message.name}
              </div>
              <div className='Content-msg'>
                {message.msg}
              </div>
            </div>)
          )}
        </div>
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
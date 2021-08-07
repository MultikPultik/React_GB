import './App.css';
import { useState, useEffect } from 'react';
import { Button } from './components/button/button';
import { Input } from './components/input/input';
import { Message } from './components/message/Message';

export function App() {
  const [messageList, setMessagesList] = useState([
    { name: 'Bot', msg: 'Привет, это Bot!' },
  ]);

  const [value, setValue] = useState('');

  const sendMessage = () => {
    setMessagesList((state) => [...state, { name: 'Дмитрий', msg: value }]);
    setValue('');
  };

  useEffect(() => {
    const prevMessage = messageList[messageList.length - 1];
    console.log(prevMessage);

    if (prevMessage.name === 'Дмитрий') {
      setTimeout(() => {
        setMessagesList((state) => [
          ...state,
          {
            name: 'Bot',
            msg: 'Я еще не настроен... Извини не могу пообщаться :((',
          },
        ]);
      }, 1000);
    }
  }, [messageList]);

  return (
    <div className="App">
      <div className="App-wrap">
        <Message messageList={messageList} />
        <div className="App-footer">
          <Input value={value} setValue={setValue} />
          <Button sendMessage={sendMessage} />
        </div>
      </div>
    </div>
  );
}

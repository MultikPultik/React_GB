// import './App.css';
import { Box } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import  {React, useRef, useState, useEffect } from 'react';

import { MessageLayout } from './components/messageLayout/MessageLayout';
import { Send } from './components/send/Send';

export function App() {
  const [messageList, setMessagesList] = useState([
    { name: 'Bot', msg: 'Привет, это Bot!' },
  ]);

  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  const sendMessage = () => {
    setMessagesList((state) => [...state, { name: 'Дмитрий', msg: value }]);
    setValue('');

    inputRef.current.focus();
  };

  useEffect(() => {
    const prevMessage = messageList[messageList.length - 1];

    inputRef.current.focus();
    if (prevMessage.name === 'Дмитрий') {
      setTimeout(() => {
        setMessagesList((state) => [
          ...state,
          {
            name: 'Bot',
            msg: 'Я еще не настроен... Извини, не могу пообщаться',
          },
        ]);
      }, 1000);
    }
  }, [messageList]);
  return (
    <div className="App">
      <Container
        maxWidth="sm"
        style={{ backgroundColor: '#cfe8fc', height: '95vh' }}
      >
        <Box height="100%" bgcolor="grey.300">
          <Box display="flex" height="100%" p={0} bgcolor="background.paper">
            <Box flexGrow={1}>
              <Box
                p={0}
                display="flex"
                flexDirection="column"
                height="100%"
                bgcolor="grey.300"
              >
                <Box p={1} bgcolor="grey.400">
                  Item 2
                </Box>
                <Box p={1} flex={1} flexGrow={1} bgcolor="grey.500">
                  Item 3
                </Box>
              </Box>
            </Box>

            <Box
              p={0}
              flexGrow={1}
              style={{ width: '250px' }}
              bgcolor="grey.400"
            >
              <Box
                p={0}
                display="flex"
                flexDirection="column"
                height="100%"
                bgcolor="grey.300"
              >
                <Box p={1} flex={0} bgcolor="grey.200">
                  Header
                </Box>
                <MessageLayout messageList={messageList} />

                <Box p={1} flex={0} bgcolor="grey.200">
                  <Input
                    value={value}
                    inputRef={inputRef}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Введите сообщение..."
                    fullWidth={true}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton onClick={sendMessage}>
                          <Send />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

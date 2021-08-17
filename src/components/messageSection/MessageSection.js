import {
  Box,
  Divider,
  IconButton,
  Input,
  InputAdornment,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useRef, useState, useEffect } from 'react';
import { Header } from '../header/Header';
import { MessageLayout } from './messageLayout/MessageLayout';

export function MessageSection() {
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
    <Box p={0} flexGrow={1} style={{ width: '70%' }} bgcolor="grey.400">
      <Box
        p={0}
        display="flex"
        flexDirection="column"
        height="100%"
        bgcolor="grey.300"
      >
        <Header />
        <Divider />
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
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
        <Divider />
      </Box>
    </Box>
  );
}

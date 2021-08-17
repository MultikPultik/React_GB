import { Box } from '@material-ui/core';
import { Message } from './message/Message';

export function MessageLayout(params) {
  return (
    <Box p={0.1} display="flex" flexGrow={1} bgcolor="grey[600]">
      <Message messageList={params.messageList} />
    </Box>
  );
}
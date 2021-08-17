import { Box, Divider, List, makeStyles } from '@material-ui/core';
import { Header } from '../header/Header';
import { Room } from './room/Room';

const useStyles = makeStyles(() => ({
  list: {
    padding: 0,
  },
}));

export function ChartSection() {
  const classes = useStyles();

  return (
    <Box  borderColor="error.main" borderRight={1} flexGrow={1} width="30%">
      <Header />
      <Divider />
      <List className={classes.list}>
        <Room user={'User1'} selected={!true} />
        <Room user={'User2'} />
        <Room user={'User3'} />
      </List>
    </Box>
  );
}

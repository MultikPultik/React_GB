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
        <Room chart={'Chart1'} selected={!true} />
        <Room chart={'Chart2'} />
        <Room chart={'Chart3'} />
      </List>
    </Box>
  );
}

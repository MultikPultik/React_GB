import { Box, Container, makeStyles } from '@material-ui/core';
import { React } from 'react';
import { ChartSection, MessageSection } from './components';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#cfe8fc',
    height: '100vh',
    padding: 0,
  },
}));

export function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Container maxWidth="md" className={classes.container}>
        <Box display="flex" height="100%" p={0} bgcolor="background.paper">
          <ChartSection />
          <MessageSection />
        </Box>
      </Container>
    </div>
  );
}

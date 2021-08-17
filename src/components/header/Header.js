import './header.css';
import {Box, IconButton, makeStyles } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'flex-end',
    padding: '6px 1px 6px 6px',
  },
  iconButton: {
    padding: 2,
  },
}));

export function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.root} bgcolor="grey.200">
      <IconButton className={classes.iconButton}>
        <MoreVertIcon />
      </IconButton>
    </Box>
  );
}

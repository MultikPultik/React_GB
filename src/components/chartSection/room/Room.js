import {
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(() => ({
  root: {
    padding: '6px 1px 6px 6px',
    display: 'flex',
    alignItems: 'center',
    height: '60px',
  },
  iconButton: {
    padding: 2,
  },
}));

export function Room(props) {
  const classes = useStyles();

  return (
    <ListItem
      className={classes.root}
      button={true}
      divider={true}
      selected={props.selected}
    >
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary={props.user} />
      <IconButton className={classes.iconButton}>
        <MoreVertIcon />
      </IconButton>
    </ListItem>
  );
}

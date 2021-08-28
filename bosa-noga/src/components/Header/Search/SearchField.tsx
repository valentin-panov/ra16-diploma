import React, { ReactElement } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from './SearchIcon';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '4px 2px',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      height: '42px',
      borderRadius: '7px',
      boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: '10px',
    },
  })
);

export default function SearchField(): ReactElement {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} onBlur={() => {}}>
      <SearchIcon />
      <InputBase className={classes.input} placeholder="" inputProps={{ 'aria-label': 'search' }} autoFocus />
    </Paper>
  );
}

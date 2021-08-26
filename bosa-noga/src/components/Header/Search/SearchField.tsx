import React, { ReactElement } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
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
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: '10px',
    },
    divider: {
      height: '28px',
      margin: '4px',
    },
  })
);

export default function SearchField(): ReactElement {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} onBlur={() => {}}>
      <SearchIcon />
      <InputBase className={classes.input} placeholder="" inputProps={{ 'aria-label': 'search' }} autoFocus />
      <IconButton type="submit" className={classes.iconButton} aria-label="search" />
    </Paper>
  );
}

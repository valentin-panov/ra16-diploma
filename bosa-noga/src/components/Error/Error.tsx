import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export type Props = {
  message: string;
};

export default function Error({ message }: Props): ReactElement {
  const classes = useStyles();

  return (
    <div className={`${classes.root} shadow`} style={{ margin: '0.5vmin' }}>
      <Alert variant="filled" severity="error">
        Произошла ошибка: {message}
      </Alert>
    </div>
  );
}

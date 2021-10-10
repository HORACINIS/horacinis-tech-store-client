import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  img: {
    maxWidth: 300,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default useStyles;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    flexGrow: 1,
  },
  img: {
    maxWidth: 350,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));

export default useStyles;
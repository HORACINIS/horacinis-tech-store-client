import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  control: {
    padding: theme.spacing(1),
  },
  name: {
    minHeight: '70px'
  },
  imageGridComponent: {
    margin: '15px 0px 15px 0px'
  },
  image: {
    width: 150,
  },
}));

export default useStyles;
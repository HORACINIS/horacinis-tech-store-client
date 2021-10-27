import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    margin: '20px 0px 20px 0px',
  },
  emptyCartIcon: {
    margin: '60px 0px 40px 0px'
  },
  emptyCartSubtitle: {
    marginBottom: '30px'
  },
  productImage: {
    width: '130px'
  },
  quantityButtons: {
    border: 'grey 0.5px solid', borderRadius: '5px', maxWidth: '290px'
  },
  productPriceTablecell: {
    width: '260px'
  },
});

export default useStyles;
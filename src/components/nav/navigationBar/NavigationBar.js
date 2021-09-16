import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link, useHistory } from 'react-router-dom';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const NavigationBar = ({ productsCategories, fetchProductsFunc }) => {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = useState(false);

  const handleChange = (event, newValue) => {
    // console.log(productsCategories)
    // console.log(event.target.textContent)
    // console.log(value)
    setValue(newValue)
  };

  useEffect(() => {
    if (history.location.pathname !== '/') {
      productsCategories.forEach((product, index) => {
        if (history.location.pathname === `/products/${product}`) {
          setValue(index);
        }
      });
    }
    if (history.location.pathname === '/') {
      // console.log('HOME PAGE HISTORY', history.location.pathname)
      setValue(false);
    }
  }, [value, history.location.pathname, productsCategories]);

  return (
    <div className={classes.root}>
      <AppBar position="static" color='inherit'>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force tabs example"
        >
          {/* <Tab label="home" component={Link} to={'/'} {...a11yProps(-1)} />  ** THIS COULD BE A HOME ICON ** */}
          {productsCategories.map((product, index) => (
            <Tab key={index} label={product} component={Link} to={`/products/${product}`} {...a11yProps({ value })} />
          ))}
          <Tab label="more" component={Link} to={'/products/test2'} {...a11yProps(2)} />
          <Tab label="more" component={Link} to={'/products/test3'} {...a11yProps(3)} />
          <Tab label="more" component={Link} to={'/products/test4'} {...a11yProps(4)} />
        </Tabs>
      </AppBar>
    </div >
  );
}

export default NavigationBar;
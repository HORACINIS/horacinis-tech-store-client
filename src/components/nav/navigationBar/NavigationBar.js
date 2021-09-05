import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

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

const NavigationBar = ({ products }) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(window.location.pathname === '/' ? false : newValue);
    console.log(newValue)
    console.log(window.location.pathname)
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="on"
          aria-label="scrollable force tabs example"
        >
          {products.map((product, index) => (
            <Tab key={index} label={product} component={Link} to={`/products/${product}`} {...a11yProps({ index })} />
          ))}
          <Tab label="test" {...a11yProps(2)} />
          <Tab label="test" {...a11yProps(3)} />
          <Tab label="test" {...a11yProps(4)} />
          <Tab label="test" {...a11yProps(5)} />
          <Tab label="test" {...a11yProps(6)} />
          <Tab label="test" {...a11yProps(7)} />
          <Tab label="test" {...a11yProps(8)} />
        </Tabs>
      </AppBar>
    </div >
  );
}

export default NavigationBar;
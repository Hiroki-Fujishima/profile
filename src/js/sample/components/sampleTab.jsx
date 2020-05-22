import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';

function SampleTab(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

SampleTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
   
    position: 'absolute',
    top: '0',
  },
  bar: {

  backgroundColor: 'black',
  }
}));
function HeaderTab (props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  console.log('----------------------------------------props');
  console.log(props);
  const handleChange = (event, newValue) => {
    console.log('------handleChange');
 
    props.tab(newValue);
    setValue(newValue);
    
  };
  console.log(value);
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar}>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="TOP" {...a11yProps(0)} />
          <Tab label="PROFILE" {...a11yProps(1)} />
          <Tab label="PRODUCTS" {...a11yProps(2)} />
          <Tab label="SKILL" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SampleTab value={value} index={0}>
        Item One
      </SampleTab>
      <SampleTab value={value} index={1}>
        Item Two
      </SampleTab>
      <SampleTab value={value} index={2}>
        Item Three
      </SampleTab>
      <SampleTab value={value} index={3}>
        Item Four
      </SampleTab>
    </div>
  );
}

HeaderTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  tab: PropTypes.func,
};
export default HeaderTab;


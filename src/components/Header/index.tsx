import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { useHistory } from  'react-router-dom';

const useStyles = makeStyles({
  root: { backgroundColor: blueGrey[900] }
});

const Header: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const history = useHistory();

  return (
    <AppBar
      position="static"
      className={classes.root}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab
          label="Home"
          onClick={() => history.push('/')}
        />
        <Tab
          disabled
          label="Add post"
          onClick={() => history.push('/add-post')}
        />
      </Tabs>
    </AppBar>
  );
}

export default Header;
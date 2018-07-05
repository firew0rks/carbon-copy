import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Notifications from '@material-ui/icons/Notifications';
import Settings from '@material-ui/icons/Settings';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Person from '@material-ui/icons/Person';

class Myapps extends React.Component{
    render() {
        return(
            <div >
      <AppBar position="static" style={{backgroundColor: 'rgb(12, 46, 51)'}}>
        <Toolbar>
          <Grid container justify={'space-between'}>
            <Typography variant="title" color="inherit">
              Team 2 - Carbon Copy
            </Typography>

            <div>
              <Notifications style={{marginRight: 20}}/>
              <Settings style={{marginRight: 20}}/>
              <Person style={{marginRight: 20}}/>
            </div>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>

    );
  }
}
export default Myapps

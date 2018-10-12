import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';



const styles = {
  root: {
    flexGrow: 1,
  },

};

class DenseAppBar extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" >
              Minds Job Portal
          </Typography>
            <Button color="inherit" href="/addjob">Add Job</Button>
            <Button color="inherit" href="/addpwid">Add PWID</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);

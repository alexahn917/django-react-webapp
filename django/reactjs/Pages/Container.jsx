import React from 'react';
import PropTypes from 'prop-types';
import MainDrawer from '../Components/MainDrawer'
import MainAppBar from '../Components/MainAppBar'
import {withStyles} from "material-ui/styles/index";
import Dashboard from "./Dashboard";

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

class Container extends React.Component {
  state = {
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  render() {
    const {classes, theme} = this.props;
    return (
        <div className={classes.root}>
          <MainAppBar open={this.state.open}
                      onHandleDrawerOpen={this.handleDrawerOpen.bind(this)}/>
          <MainDrawer open={this.state.open}
                      onHandleDrawerClose={this.handleDrawerClose.bind(this)}/>
          <Dashboard/>
        </div>
    );
  }
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Container);
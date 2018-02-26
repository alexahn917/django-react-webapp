import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft';
import {mailFolderListItems} from '../Data/tileData';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    width: 60,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

class MainDrawer extends React.Component {
  onDrawerClose = () => {
    this.props.onHandleDrawerClose();
  };

  render() {
    const {classes, theme, open} = this.props;
    return (
        <div>
          <Drawer
              variant="permanent"
              classes={{
                paper: classNames(
                    classes.drawerPaper, !open
                    && classes.drawerPaperClose),
              }}
              open={open}
          >
            <div className={classes.toolbar}>
              <IconButton
                  onClick={this.onDrawerClose.bind(this)}
              >
                <ChevronLeftIcon/>
              </IconButton>
            </div>
            <Divider/>
            <List>{mailFolderListItems}</List>
          </Drawer>
        </div>
    );
  }
}

MainDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MainDrawer);
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import List from 'material-ui/List';
import { mailFolderListItems } from '../Data/tileData';

const styles = theme => ({
});

class DashboardMenu extends React.Component {
  render() {
    const {classes, theme} = this.props;
    return (
          <List>{mailFolderListItems}</List>
    );
  }
}

DashboardMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(DashboardMenu);
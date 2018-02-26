import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import {withStyles} from "material-ui/styles/index";

const styles = theme => ({
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

class Dashboard extends React.Component {
  render() {
    const {classes, theme} = this.props;
    return (
        <main className={classes.content}>
          <div className={classes.toolbar}/>
          <Typography noWrap>{'Main Content!'}</Typography>
        </main>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Dashboard);
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "material-ui/styles/index";

const styles = theme => ({
});

class Home extends React.Component {
  render() {
    const {classes, theme} = this.props;
    return (
        <div>
          <h1>Welcome!</h1>
        </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Home);
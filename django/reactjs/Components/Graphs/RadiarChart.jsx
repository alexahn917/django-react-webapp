import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "material-ui/styles/index";
import {RadialChart} from 'react-vis';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  title: {
    marginBottom: 16,
    fontSize: 14,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
const data = [{angle: 1, radius: 10},
  {
    angle: 2,
    label: 'Super Custom label',
    subLabel: 'With annotation',
    radius: 20
  },
  {angle: 5, radius: 5, label: 'Alt Label'},
  {angle: 3, radius: 14},
  {
    angle: 5,
    radius: 12,
    subLabel: 'Sub Label only',
    className: 'custom-class'
  }];

class RadiarChart extends React.Component {
  render() {
    const {classes, theme} = this.props;
    return (
        <Paper className={classes.paper}>
          <Typography className={classes.title}>Radial Chart</Typography>
          <RadialChart
              data={data}
              height={200} width={250}/>
        </Paper>
    );
  }
}

RadiarChart.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(RadiarChart);
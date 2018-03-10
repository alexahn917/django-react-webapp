import React from 'react';
import PropTypes from 'prop-types';
import {HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis} from 'react-vis';
import {withStyles} from "material-ui/styles/index";
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  title: {
    marginBottom: 16,
    fontSize: 14,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'inline-block',
  },
});
const data = [
  {x: 0, y: 8},
  {x: 1, y: 5},
  {x: 2, y: 8},
  {x: 3, y: 9},
];

class LineChart extends React.Component {
  render() {
    const {classes, theme} = this.props;
    return (
        <Paper className={classes.paper}>
          <Typography className={classes.title}>Line Chart</Typography>
          <XYPlot height={200} width={350}>
            <HorizontalGridLines/>
            <LineSeries data={data} style={{strokeWidth: 2}} animation/>
            <XAxis/>
            <YAxis/>
          </XYPlot>
        </Paper>
    );
  }
}

LineChart.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(LineChart);
import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "material-ui/styles/index";
import Grid from 'material-ui/Grid';
import LineChart from "../Components/Graphs/LineChart";
import VerticalBarChart from "../Components/Graphs/VerticalBarChart";
import RadiarChart from "../Components/Graphs/RadiarChart";
import ScatterPlotChart from "../Components/Graphs/ScatterPlotChart";

const styles = theme => ({
  summaryBox: {
    marginTop: 'calc(1%)',
  }
});

class SummaryGraphs extends React.Component {
  state = {
    spacing: '24',
  };

  render() {
    const {classes, theme} = this.props;
    return (
        <Grid container justify="center" spacing={Number(this.state.spacing)} className={classes.summaryBox}>
          <Grid key={1} item xs>
            <LineChart/>
          </Grid>
          <Grid key={2} item xs>
            <VerticalBarChart/>
          </Grid>
          <Grid key={4} item xs>
            <ScatterPlotChart/>
          </Grid>
          <Grid key={3} item xs>
            <RadiarChart/>
          </Grid>
        </Grid>
    );
  }
}

SummaryGraphs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(SummaryGraphs);
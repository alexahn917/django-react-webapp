import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "material-ui/styles/index";
import TextField from 'material-ui/TextField';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import QueryResultTable from "./QueryResultTable";
import Grid from 'material-ui/Grid';

const styles = theme => ({
  searchBar: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 'calc(80%)',
  },
  card: {
    minWidth: 'calc(80%)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  pos: {
    marginBottom: 12,
    color: theme.palette.text.secondary,
  },
});

class SearchArea extends React.Component {
  render() {
    const {classes, theme} = this.props;
    return (
        <Grid item xs={12} md={8} lg={8}>
          <TextField
              id="search"
              label="Search"
              type="search"
              className={classes.searchBar}
              margin="normal"
          />
          <Card className={classes.card} elevation={4}>
            <CardContent>
              <Typography className={classes.title}>Qs: what is the average ERA
                for Clayton Kershaw?</Typography>
              <Typography variant="headline" component="h2">
                Clayton Kershaw
              </Typography>
              <Typography className={classes.pos}>Average
                Statistics</Typography>
              <QueryResultTable/>
            </CardContent>
            <CardActions>
              <Button size="small">Expand Raw Data</Button>
            </CardActions>
          </Card>
        </Grid>
    );
  }
}

SearchArea.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(SearchArea);
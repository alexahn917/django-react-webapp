import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Card, {CardActions, CardContent} from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import QueryResultTable from "../../components/QueryResultTable";

const styles = theme => ({
  searchBar: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    width: 'calc(90%)',
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
  action: {
    display: 'flex',
  },
});

class Search extends React.Component {
  render() {
    const {classes, theme} = this.props;
    return (
        <Grid container spacing={16} className={classes.container_grid}>
          <Grid item xs={11} md={11} lg={11}>
            <TextField
                id="search"
                label="Search"
                type="search"
                className={classes.searchBar}
                margin="normal"
            />
            <Card className={classes.card} elevation={4}>
              <CardContent>
                <Typography className={classes.title}>Qs: what is the
                  average
                  ERA
                  for Clayton Kershaw?</Typography>
                <Typography variant="headline" component="h2">
                  Clayton Kershaw
                </Typography>
                <Typography className={classes.pos}>Average
                  Statistics</Typography>
                <QueryResultTable/>
              </CardContent>
              <CardActions>
                <Button size="small" className={classes.action}>Download CSV</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
    );
  }
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Search);
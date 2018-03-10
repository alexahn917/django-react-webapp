import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Redirect} from 'react-router-dom'
import {withStyles} from "material-ui/styles/index";
import Grid from 'material-ui/Grid';
import ArticleFeeds from "../Components/ArticleFeeds";
import SummaryGraphs from "../Components/SummaryGraphs";
import SearchArea from "../Components/SearchArea";

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
    container_grid: {
        flexGrow: 1,
        width: '92vw',
    },
});

class Dashboard extends React.Component {
    state = {
        redirect: false
    };



    render() {
        const {classes, redirect, theme} = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Grid container spacing={16} className={classes.container_grid}>
                    <Switch>
                        <Route path='/search' component={SearchArea}/>
                        <Route path='/chart' component={SummaryGraphs}/>
                        <Route path='/articles' component={ArticleFeeds}/>
                    </Switch>
                </Grid>
            </main>
        );
    }
}

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(Dashboard);
import React from 'react';
import Typography from 'material-ui/Typography';
import MainDrawer from '../Components/MainDrawer'
import MainAppBar from '../Components/MainAppBar'
import {withStyles} from "material-ui/styles/index";

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 430,
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class Container extends React.Component {
    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <MainAppBar state={this.state} onHandleDrawerOpen={this.handleDrawerOpen.bind(this)}/>
                <MainDrawer state={this.state} onHandleDrawerClose={this.handleDrawerClose.bind(this)}/>
                <main className={classes.content}>
                    <div className={classes.toolbar}/>
                    <Typography noWrap>{'Main Content.'}</Typography>
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Container);
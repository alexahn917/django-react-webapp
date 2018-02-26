import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Button from 'material-ui/Button';

const drawerWidth = 240;

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    flex: {
        flex: 1,
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
});

class MainAppBar extends React.Component {

    onDrawerOpen = () => {
        this.props.onHandleDrawerOpen();
    };

    render() {
        const {classes, theme, state } = this.props;

        console.log(this.props);
        return (
            <AppBar
                position="absolute"
                className={classNames(classes.appBar, state.open && classes.appBarShift)}
            >
                <Toolbar disableGutters={!state.open}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.onDrawerOpen.bind(this)}
                        className={classNames(classes.menuButton, state.open && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Mini variant drawer
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        );
    }
}

MainAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(MainAppBar);
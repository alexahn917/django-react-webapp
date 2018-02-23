import React from "react"
import Radium from "radium"
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const VertIcon = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
          <IconButton><MoreVertIcon/></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
      <MenuItem primaryText="First"/>
      <MenuItem primaryText="Second"/>
      <MenuItem primaryText="Third"/>
    </IconMenu>
);

const styles = {
  title: {
    cursor: 'pointer',
  },
};

@Radium
export default class MainNavigation extends React.Component {
  state = {
    clicked: true,
  };

  handleClick = (e) => {
    this.setState({clicked: !this.state.clicked});
    console.log(this.state.clicked);
  };

  render() {
    return (
        <div>
          <AppBar
              title={<span style={styles.title}>Title</span>}
              onLeftIconButtonClick={this.handleClick}
              iconElementLeft={this.state.clicked
                  ? <IconButton><NavigationMenu /></IconButton>
                  : <IconButton><NavigationClose /></IconButton>}
              iconElementRight={<VertIcon/>}
          />
        </div>
    )
  }
}

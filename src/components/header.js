import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



class Header extends Component {
  state = {
    open: false
  }

  handleToggle = () => this.setState({open: !this.state.open});

  handleClose = () => this.setState({open: false});

  render(){
    return(
      <div>
        <AppBar
          title="Vehicle Comparison Tool"
          onClick={this.handleToggle}
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onClick={this.handleClose}>Home</MenuItem>
            <MenuItem onClick={this.handleClose}>All Cars</MenuItem>
            <MenuItem onClick={this.handleClose}>Add New Car</MenuItem>
            <MenuItem onClick={this.handleClose}>Edit Car</MenuItem>
            <MenuItem onClick={this.handleClose}>All Locations</MenuItem>
            <MenuItem onClick={this.handleClose}>Add New Location</MenuItem>
            <MenuItem onClick={this.handleClose}>Edit Location</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Header;

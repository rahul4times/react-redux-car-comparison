import React from 'react';
import Paper from 'material-ui/Paper';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Footer = () => {
  return(
    <div>
      <Paper zDepth={1}>
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
        >
        <MenuItem primaryText="Add New Location" />
        <MenuItem primaryText="All Locations" />
        <MenuItem primaryText="Add New Car" />
        <MenuItem primaryText="All Cars" />
        <MenuItem primaryText="Home" />
      </IconMenu>
      </Paper>
    </div>
  );
}

export default Footer;

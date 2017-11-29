import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import CarPicture from './img/car.png';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import EditButton from 'material-ui/svg-icons/content/create';
import DeleteButton from 'material-ui/svg-icons/action/delete';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const AddNewCar = () => {
  return(
    <div>
    <div className="create-car">

        <h5>Create New Car</h5>
          <br/>
          <div>
          <SelectField
              floatingLabelText="Year"
              autoWidth={true}
            >
              <MenuItem value={2000} primaryText="2000" />
              <MenuItem value={2001} primaryText="2001" />
              <MenuItem value={2003} primaryText="2003" />
              <MenuItem value={2004} primaryText="2004" />
              <MenuItem value={2005} primaryText="2005" />
          </SelectField>
          <SelectField
              floatingLabelText="Year"
              autoWidth={true}
            >
              <MenuItem value={"Honda"} primaryText="Honda" />
              <MenuItem value={"Chrysler"} primaryText="Chrysler" />
              <MenuItem value={"Mazda"} primaryText="Mazda" />
              <MenuItem value={"Chevrolet"} primaryText="Chevrolet" />
              <MenuItem value={"Kia"} primaryText="Kia" />
              <MenuItem value={"Nissan"} primaryText="Nissan" />
          </SelectField>
          <SelectField
              floatingLabelText="Model"
              autoWidth={true}
            >
              <MenuItem value={"Civic"} primaryText="Civic" />
              <MenuItem value={"PT Cruiser"} primaryText="PT Cruiser" />
              <MenuItem value={"6"} primaryText="6" />
              <MenuItem value={"Volt"} primaryText="Volt" />
              <MenuItem value={"Camry LE"} primaryText="Camry LE" />
              <MenuItem value={"Sedona"} primaryText="Sedona" />
              <MenuItem value={"Prius"} primaryText="Prius" />
              <MenuItem value={"350Z"} primaryText="350Z" />
          </SelectField>
          <br/>
          <br/>
          <TextField
            hintText="12000"
            floatingLabelText="Miles"
            floatingLabelFixed={true}
          />
          <TextField
            hintText="$25000"
            floatingLabelText="Price"
            floatingLabelFixed={true}
          />
          <TextField
            hintText="https://yourphoto.com"
            floatingLabelText="Photo URL"
            floatingLabelFixed={true}
          />
          <br/>
        </div>
          <div className="add-button">
            <RaisedButton label="Add" primary={true} />
          </div>
        <br/>
    </div>
    <div className="car-table-view">
      <Paper zDepth={1}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Photo</TableHeaderColumn>
            <TableHeaderColumn>Year</TableHeaderColumn>
            <TableHeaderColumn>Make</TableHeaderColumn>
            <TableHeaderColumn>Model</TableHeaderColumn>
            <TableHeaderColumn>Miles</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Action</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>
              <Avatar src={CarPicture} size={100} />
            </TableRowColumn>
            <TableRowColumn>2008</TableRowColumn>
            <TableRowColumn>Toyota</TableRowColumn>
            <TableRowColumn>Camry</TableRowColumn>
            <TableRowColumn>70600</TableRowColumn>
            <TableRowColumn>$17000</TableRowColumn>
            <TableRowColumn>
              <IconButton>
                <EditButton />
              </IconButton>
              <IconButton>
                <DeleteButton />
              </IconButton>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
              <Avatar src={CarPicture} size={100} />
            </TableRowColumn>
            <TableRowColumn>2008</TableRowColumn>
            <TableRowColumn>Toyota</TableRowColumn>
            <TableRowColumn>Camry</TableRowColumn>
            <TableRowColumn>70600</TableRowColumn>
            <TableRowColumn>$17000</TableRowColumn>
            <TableRowColumn>
              <IconButton>
                <EditButton />
              </IconButton>
              <IconButton>
                <DeleteButton />
              </IconButton>
            </TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>
              <Avatar src={CarPicture} size={100} />
            </TableRowColumn>
            <TableRowColumn>2008</TableRowColumn>
            <TableRowColumn>Toyota</TableRowColumn>
            <TableRowColumn>Camry</TableRowColumn>
            <TableRowColumn>70600</TableRowColumn>
            <TableRowColumn>$17000</TableRowColumn>
            <TableRowColumn>
              <IconButton>
                <EditButton />
              </IconButton>
              <IconButton>
                <DeleteButton />
              </IconButton>
            </TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      </Paper>
    </div>
  </div>
  );
}

export default AddNewCar;

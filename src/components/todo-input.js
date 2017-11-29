import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

class ToDoInput extends Component {
  render(){
    return(
      <div className="todoinput-section">
        <TextField floatingLabelText="Add to do" />
        <FloatingActionButton mini={true}>
          <ContentAdd />
        </FloatingActionButton>
        <div className="add-button">

        </div>
      </div>
    );
  }
}
export default ToDoInput;

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/header';
import ToDoInput from './components/todo-input';
import ToDoList from './components/todo-list';
import Footer from './components/footer';
import AddNewCar from './components/add-new-car';


class App extends Component{
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Header />
          <AddNewCar />
          <Footer />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;

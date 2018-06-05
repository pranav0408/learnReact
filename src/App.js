import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      { name: 'Pranav', age: 20 },
      { name: 'Charu', age: 24 },
      { name: 'Shivam', age: 20 }
    ],
    otherState: 'Football',
    showPersons: false
  }

switchNameHandler = (newName) => {
   this.setState({
    persons : [
      { name: newName, age: 20 },
      { name: 'Charu', age: 24 },
      { name: 'Shivam', age: 20 }
    ]
   })
}

nameChangedHandler = (event) => {
  this.setState({
    persons : [
      { name: 'Pranav', age: 20 },
      { name: 'Charu', age: 24 },
      { name: event.target.value, age: 20 }
    ]
   })
} 
togglePersonHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}

  render() {
    const style = {
      backgroundColor: 'tomato',
      font: 'inherit',
      color: 'white',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I am a React App.</h1>
        <p>This is really workin!</p>
        <button 
         style={style}
         onClick={this.togglePersonHandler}>Toggle Persons</button>
      {
        this.state.showPersons ?
        <div>
        <Person 
         name={this.state.persons[0].name} 
         age={this.state.persons[0].age}
         click={this.switchNameHandler.bind(this, 'Pranav!')}> My Hobby: Coding </Person>
        <Person 
         name={this.state.persons[1].name} 
         age={this.state.persons[1].age}/>
        <Person 
         name={this.state.persons[2].name} 
         age={this.state.persons[2].age}
         changed={this.nameChangedHandler}/>
        </div> : null
      }
      </div>
    );
  }
}

export default App;

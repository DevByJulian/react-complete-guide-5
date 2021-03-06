import React, { Component } from "react";
import "./App.css";
import Radium, {StyleRoot}  from 'radium';
import Person from "./components/Person/person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    ottherState: "some other value",
    showHide: true
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]) - Alt method
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice() - slice method;
    const persons = [...this.state.persons]; //spread method
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  toggleShowHideHandler = () => {
    this.setState({
      showHide: !this.state.showHide
    });
  };

  toggleShowHideHandlerMaxWay = () => {
    const doesShow = this.state.showHide;
    this.setState({
      showHide: !doesShow
    });
  };

  render() {
    const styles = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showHide) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={() => {
                  this.deletePersonHandler(index);
                }}
                key={person.id}
                change={event => {
                  this.changeNameHandler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );

      styles.backgroundColor = 'red'
    }

    let classy = ['pink', 'bold'].join(' ')

    const classes = []
    if(this.state.persons.length <= 2) {
      classes.push('red') // classes = ['red']
    }
    if(this.state.persons.length <=1 ) {
      classes.push('bold') // classes = ['red', 'bold']
    }

    return (
      <StyleRoot>
      <div className="App">
      <h4>Delete Persons to see dynamic class change</h4>

      <p className={classes.join(' ')}>Setting Class Names Dynamically</p>

      <p className={classy}>Stay Classy!</p>

        <button style={styles} className="m-4" onClick={this.toggleShowHideHandlerMaxWay}>
          {this.state.showHide ? "Hide Persons" : "Show Persons"}
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

function App() {
    constructor(props) {
        super(props);
        this.state = {
            activities: []
        };

        this.addActivity = this.addActivity.bind(this);
    }

    addActivity(event){
        this.setState({
            [target.name]: target.value
        });
    }
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <body className="App-body">
            <fieldset className="App-fieldset">
                <div>Add a new activity: </div>
                  <input id="input-activity" placeholder="add an activity" name={this.activities} value="" />
                  <button id="create-activity" onSubmit={this.addActivity}>Create a new activity</button>
            </fieldset>
                <br />
            <fieldset className="App-fieldset">
                <div>Press button for a random activity to do: </div>
                <button id="receive-activity">Receive a new activity</button>
            </fieldset>
                <br />
            <fieldset className="App-fieldset">
                <p id="new-activity" >
                    ???????
                </p>
            </fieldset>
                <br />
            <fieldset className="App-fieldset">
                <p id="i-was-here">Created by <a href="https://github.com/cireneirbo">cireneirbo</a></p>
            </fieldset>
        </body>
        <footer className="App-footer">
              <ul>
                  {activities.map((activity) => (
                      <Activity name={activity} />
                  ))}
              </ul>
        </footer>
    </div>
  );
}

function Activity({ name }) {
    // we access the 'name' prop directly using object destructuring
    return <p>This person's name is: {name}</p>;
}

export default App;

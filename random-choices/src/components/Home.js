import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            activities: []
        };

        this.addActivity = this.addActivity.bind(this);
    }

    addActivity(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="App" >
                <header className="App-header">
                </header>
                <body className="App-body">
                    <fieldset className="App-fieldset">
                        <div>Add a new activity: </div>
                        <input id="input-activity" type="text" placeholder="add an activity" name={this.activities} value="" />
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
                    <p>{this.activities}</p>
                    {/*this.activities.map((activity) => (
                        <ul>
                            {activity}
                        </ul>
                    ))*/}
                </body>
            </div>
        );
    }
}

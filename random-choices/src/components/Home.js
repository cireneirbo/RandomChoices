import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            activities: [],
            preparedActivity: ""
        };

        this.addActivity = this.addActivity.bind(this);
        this.prepareActivity = this.prepareActivity.bind(this);
    }

    prepareActivity(event) {
        this.setState({
            [event.target.name]: event.target.value
        }, console.log(this.preparedActivity));
    }

    addActivity(event) {
        this.setState({
            //[event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div className="App" >
                <fieldset className="App-fieldset">
                    <div>Add a new activity: </div>
                    <input id="input-activity" type="text" placeholder="add an activity" onChange={this.prepareActivity} name={this.preparedActivity} value="" />
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
                <p>{this.preparedActivity}</p>
                {/*this.activities.map((activity) => (
                    <ul>
                        {activity}
                    </ul>
                ))*/}
            </div>
        );
    }
}

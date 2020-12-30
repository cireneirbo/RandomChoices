import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
        <body className="App-body">
            <fieldset className="App-fieldset">
                <div>Add a new activity: </div>
                <input id="input-activity" placeholder="type an activity" value="" />
                <button id="create-activity">Create a new activity</button>
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
                <p id="i-was-here">Created by <a href="https://github.com/cireneirbo">Eric O&apos;Brien</a></p>
            </fieldset>
                <br />
                <br />
        </body>
        <footer className="App-footer">
        </footer>
    </div>
  );
}

export default App;

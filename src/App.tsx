// import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Form-frontend-backend-with-json-server-Reatc-Vite-Typescript</h1>

      <form>
        <fieldset>
          <legend>New Job</legend>
          <div className="row">
            <label>Job Title</label>
            <div>
              <input type="text" />
            </div>
          </div>

          <div className="row">
            <label>Description</label>
            <div>
              <textarea />
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;

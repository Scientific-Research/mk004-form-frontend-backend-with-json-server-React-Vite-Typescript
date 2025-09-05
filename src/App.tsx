// import './App.css';

import { useState } from 'react';

const _formData = {
  jobTitle: '',
  description: '',
};

function App() {
  const [formData, setFormData] = useState(_formData);

  return (
    <div className="App">
      <h1>Form-frontend-backend-with-json-server-Reatc-Vite-Typescript</h1>

      <section>
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

        <div className="debuggingArea">
          <pre>{JSON.stringify(formData)}</pre>
        </div>
      </section>
    </div>
  );
}

export default App;

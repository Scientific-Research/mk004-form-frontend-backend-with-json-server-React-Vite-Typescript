// import './App.css';

import { useState } from 'react';

const _formData = {
  jobTitle: 'type job here!',
  description: 'type description here!',
};

function App() {
  // const [inputText, setInputText] = useState(_formData.jobTitle);
  const [inputText, setInputText] = useState('');
  const [inputTextarea, setInputTextarea] = useState('');

  const handleInputText = (e: any) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const handleInputTextarea = (e: any) => {
    setInputTextarea(e.target.value);
  };

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
                <input
                  type="text"
                  // value={formData.jobTitle}
                  value={inputText}
                  onChange={(e) => handleInputText(e)}
                />
              </div>
            </div>

            <div className="row">
              <label>Description</label>
              <div>
                <textarea
                  // value={formData.description}
                  value={inputTextarea}
                  onChange={handleInputTextarea}
                />
              </div>
            </div>
          </fieldset>
        </form>

        <div className="debuggingArea">
          {/* {JSON.stringify(formData, null, 2)} */}
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}

export default App;

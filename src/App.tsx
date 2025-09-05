// import './App.css';

import { useState } from 'react';

// const _formData = {
//   jobTitle: 'type job here!',
//   description: 'type description here!',
// };

function App() {
  // const [inputText, setInputText] = useState(_formData.jobTitle);
  const [inputText, setInputText] = useState('');
  const [inputTextarea, setInputTextarea] = useState('');

  const _formData = {
    jobTitle: '',
    // jobTitle: 'type job here!',
    description: '',
    // description: 'type description here!',
  };

  const [formData, setFormData] = useState(_formData);

  const handleInputText = (e: any, fieldName: string) => {
    const value = e.target.value;

    // First Solution with Only one State Variable => formData
    formData.jobTitle = value;
    setFormData(formData); // This will not work - we need a copy using Spread Operator! - because State Varibale are immutable(unchangeable!)
    setFormData({ ...formData });

    // Second Solution with a new State Variable => inputText
    // formData.jobTitle = value;
    // setInputText(value);
  };

  const handleInputTextarea = (e: any) => {
    const value = e.target.value;

    // First Solution with Only one State Variable => formData
    formData.description = value;
    setFormData({ ...formData });

    // Second Solution with a new State Variable => inputTextarea
    // formData.description = value;
    // setInputTextarea(value);
  };

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
                  value={formData.jobTitle}
                  // value={inputText}
                  placeholder="type job here!"
                  onChange={(e: any) => handleInputText(e, 'jobTitle')}
                />
              </div>
            </div>

            <div className="row">
              <label>Description</label>
              <div>
                <textarea
                  value={formData.description}
                  // value={inputTextarea}
                  placeholder="type description here!"
                  onChange={(e) => handleInputTextarea(e)}
                />
              </div>
            </div>
          </fieldset>
        </form>

        <div className="debuggingArea">
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}

export default App;

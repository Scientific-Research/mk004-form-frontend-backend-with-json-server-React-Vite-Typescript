// import './App.css';

import { useState } from 'react';

// const _formData = {
//   jobTitle: 'type job here!',
//   description: 'type description here!',
// };

function App() {
  // const [inputText, setInputText] = useState(_formData.jobTitle);
  // We can use these two below extra state variables to do the same, but the formData state variable is enough!
  const [inputText, setInputText] = useState('');
  const [inputTextarea, setInputTextarea] = useState('');

  const _formData = {
    jobTitle: '',
    // jobTitle: 'type job here!',
    description: '',
    // description: 'type description here!',
  };

  const [formData, setFormData] = useState(_formData);

  const applicationInputData = (e: any, fieldName: any) => {
    const value = e.target.value;

    if (fieldName === 'jobTitle') {
      formData.jobTitle = value;
    } else {
      formData.description = value;
    }
    setFormData({ ...formData });
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
                  onChange={(e) => applicationInputData(e, 'jobTitle')}
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
                  onChange={(e) => applicationInputData(e, 'description')}
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

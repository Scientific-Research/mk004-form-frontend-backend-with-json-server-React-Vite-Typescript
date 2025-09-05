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
    jobTitle: inputText,
    description: inputTextarea,
  };

  const [formData, setFormData] = useState(_formData);

  const handleInputText = (e: any, fieldName: string) => {
    // console.log(e.target.value);
    // 'jobTitle:' setInputText(e.target.value);
    // fieldName: setInputText(e.target.value);
    // `${fieldName}: ${setInputText(e.target?.value)}`;
    // setFormData(e.target.value);

    // fieldName: setInputText(e.target.value);
    // setInputText(e.target.value);

    formData.jobTitle = e.target.value;
    setInputText(e.target.value);
  };

  const handleInputTextarea = (e: any) => {
    setInputTextarea(e.target.value);
    // setFormData(e.target.value);
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
                  // value={formData.jobTitle}
                  value={inputText}
                  onChange={(e: any) => handleInputText(e, 'jobTitle')}
                />
              </div>
            </div>

            <div className="row">
              <label>Description</label>
              <div>
                <textarea
                  // value={formData.description}
                  value={inputTextarea}
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

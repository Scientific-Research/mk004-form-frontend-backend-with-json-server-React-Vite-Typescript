// import './App.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

// const _formData = {
//   jobTitle: 'type job here!',
//   description: 'type description here!',
// };

interface IJobs {
  id: string;
  jobTitle: string;
  description: string;
  city: string;
}

const _formData = {
  jobTitle: '',
  // jobTitle: 'type job here!',
  description: '',
  // description: 'type description here!',
  city: '',
};

const backendURL = 'http://localhost:5556';

function App() {
  // const [inputText, setInputText] = useState(_formData.jobTitle);
  // We can use these two below extra state variables to do the same, but the formData state variable is enough!
  const [inputText, setInputText] = useState('');
  const [inputTextarea, setInputTextarea] = useState('');

  const [formData, setFormData] = useState(_formData);
  const [jobs, setJobs] = useState<IJobs[]>([]);

  const clearInputFields = () => {
    // remove/clear the data from input fields:

    // First Solution
    formData.jobTitle = '';
    formData.description = '';
    window.location.reload();

    // Second Solution
    // setFormData(_formData);
    // window.location.reload();
  };

  // use useEffect() to get the list of Books:
  // Arrow function => IIFE => useEffect
  useEffect(() => {
    (async () => {
      const response = await axios(`${backendURL}/jobs`);
      const _Jobs = response.data;
      console.log(_Jobs);
      setJobs(_Jobs);
    })();
  }, []);

  const applicationInputData = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    fieldName: string
  ) => {
    const value = e.target.value;

    if (fieldName === 'jobTitle') {
      formData.jobTitle = value;
    } else {
      formData.description = value;
    }
    setFormData({ ...formData });
  };

  const handleSaveForm = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    // To save the data in json-server, we have to do a POST command:
    // IIFE is a function without a name:
    (async () => {
      const response = await axios.post(`${backendURL}/jobs`, formData);
      console.log(response);
      clearInputFields();
    })();
  };

  const handleDeleteJob = async (job: IJobs) => {
    // We don't need filter, we need axios and delete(job.id) to delete the job directly from Databank(db.json)
    // const deletedJob = jobs.filter((j) => j.id !== job.id);
    // setJobs(deletedJob);

    const response = await axios.delete(`${backendURL}/jobs/${job.id}`);
    console.log(response);
    window.location.reload();
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

            <div className="row">
              <label>Description</label>
              <select name="" id="">
                <option value="hamburg">Hamburg</option>
                <option value="berlin">Berlin</option>
                <option value="dresden">Dresden</option>
                <option value="leipzig">Leipzig</option>
              </select>
            </div>

            <div className="buttonRow">
              <button onClick={(e) => handleSaveForm(e)}>Save</button>
            </div>
          </fieldset>
        </form>

        <div className="currentJobs">
          <h2>There are {jobs.length} jobs:</h2>
          {jobs.map((job) => (
            <div className="job" key={job.id}>
              <p className="title">
                {job.jobTitle} (
                <span className="delete" onClick={() => handleDeleteJob(job)}>
                  delete
                </span>
                )
              </p>
              {/* <p>{job.description}</p> */}
            </div>
          ))}
        </div>

        <div className="debuggingArea">
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      </section>
    </div>
  );
}

export default App;

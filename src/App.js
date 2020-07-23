import React, {useState}  from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState({})
  console.log(values)
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

          <input name="name" onChange={handleChange} type="text" /> 
          <input name="last_name" onChange={handleChange} type="text" /> 
 
      </header>
    </div>
  );
}

export default App;

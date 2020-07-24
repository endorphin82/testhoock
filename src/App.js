import React  from 'react';
import {useMyHook} from './util'
import './App.css';

function App() {
const {values, handleChange} = useMyHook()
  // const [values, setValues] = useState({})
  console.log(values)
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   setValues({ ...values, [name]: value })
  // }
  
  return (
    <div className="App">
      <header className="App-header">
        <p>
        </p>
          <input value={values['name']} name="name" onChange={handleChange} type="text" /> 
          <input value={values['last_name']} name="last_name" onChange={handleChange} type="text" /> 
      </header>
    </div>
  );
}

export default App;

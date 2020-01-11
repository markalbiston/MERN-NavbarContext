import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import FormWrapper from './components/FormWrapper';
import Wrapper from './components/Wrapper';
// import MyContext from './context/MyContext';


function App() {
  const [name, setName] = useState("");
  return (
    <div className="App">
        <Wrapper.Provider value={{name, setName}}>
          <Navbar />
          <FormWrapper />
        </Wrapper.Provider>
    </div>
  );
}

export default App;

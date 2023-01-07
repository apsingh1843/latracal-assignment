import { useState } from 'react';

import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const[studentList, setStudentList] = useState([]);

  return (
    <div>
      <header style={{"padding": "0px 10px"}}>
        <h1>LATRACAL</h1>
      </header>
      <div>
        <div className="box">
          <Form studentList={studentList} setStudentList={setStudentList}/>
        </div>
        <div className="box">
          <List studentList={studentList} setStudentList={setStudentList}/>
        </div>
      </div>
    </div>
  );
}

export default App;

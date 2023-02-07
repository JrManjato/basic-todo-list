import './App.css';
import React, { useState } from "react";
import List from './common/components/List';
import InputField from './common/components/InputField';

const App = () => {
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='col'>
          <h1>Enter a task</h1>
          <InputField setList={setList} />
        </div>
        <div className='col'>
          <h1>To do</h1>
          <List list={list} scale='todo' isCheckable={true} setList={setList} />
        </div>
        <div className='col'>
          <h1>Done</h1>
          <List list={list} scale='done' isCheckable={false} setList={setList} />
        </div>
      </header>
    </div>
  );
}

export default App;

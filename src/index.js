import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function AddHourForm(props) {  
  let value;
  let [ hour, setHour ] = useState('');
  let [ minute, setMinute ] = useState('');
  let [ second, setSecond ] = useState('');

  function handleChangeHour(e) {
    setHour(e.target.value);
  }

  function handleChangeMinute(e) {
    setMinute(e.target.value);
  }

  function handleChangeSecond(e) {
    setSecond(e.target.value);
  }
  function handleSubmit(e) {
    console.log(+hour, +minute, +second)
    if(+hour > 0 || +minute > 0 || +second >  0) {
      console.log("that worked")
      if ((+hour === 0) && (+minute === 0) && (+second >= 10) )
      {
        console.log(hour, minute, second)
        value = +hour*60*60 + +minute * 60 + +second;
        console.log(value)
        props.handleSubmit(value);
      }
      else{
        alert("Value must be above 10s!")
      }
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add Time in Hours" 
        onChange={handleChangeHour} 
        hour={hour} />
      <input type="text" 
        placeholder="Add Time in Minutes" 
        onChange={handleChangeMinute} 
        minute={minute} />
      <input type="text" 
        placeholder="Add Time in Seconds" 
        onChange={handleChangeSecond} 
        second={second} />
      <button type="submit">Add</button>
    </form>
  );
}

function Result(props) {
  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function TimeManager(props) {
  const [timePart, setContacts] = useState(props.data);

  function addHour(value) {
    setContacts([...timePart, value]);
  }

  return (
    <div>
      <AddHourForm handleSubmit={addHour} />
      <Result data={timePart} />
    </div>
  );
}
const timePart = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

ReactDOM.render(
  <TimeManager data={timePart} />, 
  document.getElementById('root')
);
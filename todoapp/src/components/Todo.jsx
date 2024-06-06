import { useState } from 'react';
import '../App.css';

function Todo() {
  let [arr, setArr] = useState([]);
  let [work, setWork] = useState("");

  const handleChange = (el) => {
    setWork(el.target.value);
  };

  const handleClick = () => {
    let obj = {
      task: work,
      iscom: false
    };
    setArr([...arr, obj]);
    setWork(""); 
  };


 
  
  return (
    <div id="box">
      <h1>My Todos</h1>
      <div id='inner'>
        <input  type="text"  onChange={handleChange} name='name' value={work}  placeholder='Name' />
        <button id='btn' onClick={handleClick}>Add Todo</button>
      </div>
      <div id='inner1'>
        {
        arr.map((el) => (
          <div id='outer'>
            <h1>
              {el.task} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{el.iscom ? "completed" : "not completed"}</span>
            </h1>
            <button className='btn' >Delete</button>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default Todo;

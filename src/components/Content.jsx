import React, { useState } from 'react';
import { BiPlus, BiDotsHorizontalRounded, BiSearch, BiArrowFromTop } from 'react-icons/bi';

function Content() {
  const [toggle, setToggle] = useState(true)
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask(){
    if (newTask !== ''){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }else{
       alert('Enter something');
    }
  
  }

  function dropDown(){
    <div>
      <input type='text' className='input-box' placeholder='enter activity' value={newTask}/>
      <button onClick={addTask} className='add-button'>Add</button>
    </div>
  }
  
  

 



  return (
    <div className='Dashboard-display'>
      <div className="search-box">
        <BiSearch className='icon'/>
        <input type='text' placeholder='Search'/>
      </div>
      <p>Dashboard</p>
       
      <div className='dropdowns'>
        <button onClick={()=>setToggle(!toggle)} className='drop-button' style={{maxHeight:'15px', overflowY:'auto'}}>This week<BiArrowFromTop/></button>    
        {toggle && (
          <div className="dropdown-content">
            <div className='to-do'>
              To do
              <a href='' className='buttons'>
                <BiPlus onClick={dropDown} className='add-to'/>
                <BiDotsHorizontalRounded className='more'/>
              </a>
            </div>
          <div className='in-progress'>
            In progress
            <a href='' className='buttons'>
              <BiPlus onClick={dropDown} className='add-to'/>
              <BiDotsHorizontalRounded className='more'/>
            </a>
          </div>
          <div className='done'>
            Done
            <a href='' className='buttons'>
              <BiPlus onClick={dropDown} className='add-to'/>
              <BiDotsHorizontalRounded className='more'/>   
            </a>
          </div>
          </div>
        )}
        </div>
      </div>
  );
}

export default Content;


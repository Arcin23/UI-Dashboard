import React, { useState } from 'react';
import { BiPlus, BiDotsHorizontalRounded, BiSearch, BiArrowFromTop } from 'react-icons/bi';

function Content() {
  const [toggle, setToggle] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [newTask, setNewTask] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [inputText, setInputText] = useState('');
  const [savedText, setSavedText] = useState('');

  function addTask(){
    if(newTask !== ''){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }else{
      alert('Enter something');
    }
  
  }

  function dropDown(){
    return(<div>
      <input type='text' className='input-box' placeholder='enter activity' value={newTask}/>
      <button onClick={addTask} className='add-button'>Add</button>
    </div>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSavedText(inputText);
    setInputText('');
    setShowInput(false);
  };

  function handleInputChange(event) {
    setInputText(event.target.value);
  };


  return (
    <div className='Dashboard-display'>
      <div className="search-box">
        <BiSearch className='icon'/>
        <input type='text' placeholder='Search'/>
      </div>
      <p>Dashboard</p>
       
      <div className='dropdowns'>
        <button onClick={()=>setToggle(!toggle)} className='drop-button' style={{maxHeight:'15px',padding:'10px' , maxWidth:'5px', overflowY:'auto'}}>This week<BiArrowFromTop/></button>    
        {toggle && (
          <div className="dropdown-content">
            <div className='to-do'>
              To do
              <a href='' className='buttons'>
                <BiPlus onClick={handlePlusClick} className='add-to'/>
                {showInput && (
                  <form onSubmit={handleSubmit}>
                    <input type="text" value={inputText} onChange={handleInputChange} />
                    <button type="submit">Save</button>
                  </form>
                )}
                <BiDotsHorizontalRounded className='more'/>
              </a>
            </div>
          <div className='in-progress'>
            In progress
            <a href='' className='buttons'>
              <BiPlus onClick={() => setShowInput(!showInput)} className='add-to'/>
              {showInput && (
                <form onSubmit={handleSubmit}>
                    <input type="text" value={inputText} onChange={handleInputChange} />
                    <button type="submit">Save</button>
                </form>
              )}
              
              <BiDotsHorizontalRounded onClick={() => setShowInput(!showInput)} className='more'/>
               {toggle && 
                <ul>
                  <li onClick={deleteTask}>Delete</li>
                <ul/>
              }
            </a>
          </div>
          <div className='done'>
            Done
            <a href='' className='buttons'>
              <BiPlus onClick={() => setShowInput(!showInput)} className='add-to'/>
              {showInput && (
                <form onSubmit={handleSubmit}>
                    <input type="text" value={inputText} onChange={handleInputChange} />
                    <button type="submit">Save</button>
                </form>
              )}
              <BiDotsHorizontalRounded onClick={handleMoreClick} className='more'/> 
              {toggle && 
                <ul>
                  <li onClick={deleteTask}>Delete</li>
                <ul/>
              }
              
            </a>
          </div>
          </div>
        )}
        </div>
      </div>
  );
}
                
export default Content;


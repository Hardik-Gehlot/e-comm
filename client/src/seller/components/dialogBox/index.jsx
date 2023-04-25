import React, { useState } from 'react'
import "./style.scss";
function index(prop) {
    const [value,setValue]= useState("");
    const handle=(val)=>{
        prop.dialogValue(value);
        prop.hideAction();
    }
  return (
    <div className='main-container'>
        <div className="dialog">
            
            <div className="title">Add Image</div>
            <div className="main">
            <input placeholder='Enter Image url' type='text' name='image'
            onChange={(e)=>setValue(e.target.value)}/>
            </div>
            <div className="actions">
                <button className="btn" onClick={prop.hideAction}>cancel</button>
                <button className="btn" onClick={handle}>Add</button>
            </div>
        </div>      
    </div>
  )
}

export default index

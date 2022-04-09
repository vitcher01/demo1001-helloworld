import axios from 'axios';
import React, { useState } from 'react';



const Form =(props)=>{
    const [user,setUser]=useState('');
    const handle=(event)=>{
        event.preventDefault();
        axios.get(`https://api.github.com/users/${user}`).then(res=>props.onSubmit(res.data));
        setUser('');
        }
    return (
        <form>
        <input type="textbox" id="me" value={user} onChange={(event)=>setUser(event.target.value)}/>
        <button onClick={handle}>Add</button>
        </form>
    );
}

export default Form;
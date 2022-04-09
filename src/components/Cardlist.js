import React from 'react';
import { Card } from './cards';
import axios from 'axios';
import { useState } from 'react';

const Cardlist =(props)=>{
    const [sear, setsear] = useState([]);
    return(<div>
        {props.last.map(data=><Card key={data.id} {...data}/>)}
    </div>);
}

export {Cardlist};
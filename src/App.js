import React from 'react';
import './App.css';
import { Cardlist } from './components/Cardlist';
import Form from './components/form';

export class App extends React.Component{
  state={data:[]};
  getdata=(d)=>{
    this.setState(prevState=>({data:[...prevState.data,d]}));
  }
    render(){
      return (
        <div>
  <div className="header">{this.props.title}</div>
  <Form onSubmit={this.getdata}/>
  <Cardlist last={this.state.data}/></div>
);
      }
    }

import React from 'react';

export class Card extends React.Component{
    render(){
        
        return(
        <div className="github-profile">
            <img src={this.props.avatar_url}/>
            <div className="info">
                <div className="name">{this.props.login}</div>
                <div className="company">{this.props.company}</div>
            </div>
        </div>
            );
    }
}
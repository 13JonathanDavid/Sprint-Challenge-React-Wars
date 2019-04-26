import React, { Component } from 'react';
class Datapad extends Component{
   constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    
    }
    render(){
        return (!this.props.sourceData.length)?"" :(
            <div className="datapad">
            <div className="vitals">
             <div className="vitals-header">
               <div className="arrow-left" onClick={() => this.prev(this.state.count)}></div>
             <h1 > {this.props.sourceData[this.state.count].name} </h1>
                 <div className="arrow-right" onClick= {() => this.next(this.state.count)}></div>
             </div>
             <div className="vitals">
               <h3> MASS: {this.props.sourceData[this.state.count].mass.toLowerCase() } </h3>
               <h3> SKIN COLOR: {this.props.sourceData[this.state.count].skin_color.toLowerCase() } </h3>
               <h3> EYE COLOR: {this.props.sourceData[this.state.count].eye_color.toLowerCase() } </h3>
               <h3> Birth Year: {this.props.sourceData[this.state.count].birth_year.toLowerCase() } </h3>
             </div>
                  
             </div>
             <img className="emblem"src="https://upload.wikimedia.org/wikipedia/commons/7/75/Emblem_of_the_First_Galactic_Empire.svg"/>
           </div>);
    };
    next(x){
        let len = this.props.sourceData.length;
        if(x+1 < len)
            this.setState({'sourceData':this.props.sourceData,'count':++x});
        }
    prev(x){
        let len = this.props.sourceData.length;
        if(x > 0)
        this.setState({'sourceData':this.props.sourceData,'count':--x});
    }
}
export default Datapad;

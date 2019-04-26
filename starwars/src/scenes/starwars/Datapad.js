import React, { Component } from 'react';
class Datapad extends Component{
   constructor(props){
        super(props);
        this.state = {
            sourceData : props.sourceData,
            count: 0
        };
    
    }
    render(){
        return (!this.state.sourceData.length)?"" :(
            <div className="datapad">
            <div className="vitals">
             <div className="vitals-header">
               <div className="arrow-left"></div>
             <h1> {this.state.sourceData.results[this.state.count].name}</h1>
                 <div className="arrow-right"></div>
             </div>
             <div className="vitals">
               <h3> MASS: {this.state.sourceData.results[this.state.count].mass.toLowerCase() } </h3>
               <h3> SKIN COLOR: {this.state.sourceData.results[this.state.count].skin_color.toLowerCase() } </h3>
               <h3> EYE COLOR: {this.state.sourceData.results[this.state.count].eye_color.toLowerCase() } </h3>
               <h3> Birth Year: {this.state.sourceData.results[this.state.count].birth_year.toLowerCase() } </h3>
             </div>
                  
             </div>
             <img className="emblem"src="https://upload.wikimedia.org/wikipedia/commons/7/75/Emblem_of_the_First_Galactic_Empire.svg"/>
           </div>);
    };
}
export default Datapad;
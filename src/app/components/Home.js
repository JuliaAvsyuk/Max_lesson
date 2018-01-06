import React from "react";

export class Home extends React.Component {
      render(){
         return (
             <div>
                 <div className="row">
                     <div className="col-xs-12">
                         <h1>The Ups Page</h1>
                     </div>
                 </div>

                 <div className="row">
                     <div className="col-xs-12">
                         <button className="btn-primary" onClick={()=> this.props.changeUsername("Jack")}>Change Name</button>
                     </div>
                 </div>
             </div>
         );
     }
}
  
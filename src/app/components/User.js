import React from "react";


export class User extends React.Component{
    render() {
        return (
            <div>
                <div className="row">
                   <div className="col-xs-12">
                       <h1>The Page #1</h1>
                   </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                       <p>User Name: {this.props.username}</p>
                    </div>
                </div>
            </div>
        );
    }
}

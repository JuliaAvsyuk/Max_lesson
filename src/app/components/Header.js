import React from "react";


export const Header = (props) => {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                        <li><Link to={"/home"} style={{color: "red"}}>Home</Link></li>
                        <li><Link to={"/user/"} className={"active"}>User</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
};
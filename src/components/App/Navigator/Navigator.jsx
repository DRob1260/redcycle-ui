import React from "react";
import { Link } from "react-router-dom";
import RedcycleIcon from "./redcycle-icon.png";
import "./Navigator.css";

const Navigator = () => {
    return (
        <div className={"Navigator"} data-testid={"Navigator"}>
            <nav className={"navbar"}>
                <div className={"navbar-brand h1 mb-0"}>
                    <Link to={"/redcycle-ui"}>
                        <img src={RedcycleIcon} alt={"Redcycle logo"} className={"d-inline-block align-top"} />
                        {" Redcycle"}
                    </Link>
                </div>
                <ul className={"navbar-nav mr-auto"}>
                    <li className={"nav-item active"}>
                        <Link to={"/redcycle-ui"} className={"nav-link"}>
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export { Navigator };

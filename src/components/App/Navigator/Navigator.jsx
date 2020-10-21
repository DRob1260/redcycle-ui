import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import RedcycleIcon from "./redcycle-icon.png";
import "./Navigator.scss";

const Navigator = () => {
    return (
        <div className={"Navigator"} data-testid={"Navigator"}>
            <Navbar variant={"dark"}>
                <Navbar.Brand>
                    <Link to={"/redcycle-ui"}>
                        <img src={RedcycleIcon} alt={"Redcycle logo"} className={"d-inline-block align-top"} />
                        {" Redcycle"}
                    </Link>
                </Navbar.Brand>
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href={"/redcycle-ui"}>Home</Nav.Link>
                        <Nav.Link href={"/redcycle-ui/post-creator"}>Post Creator</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export { Navigator };

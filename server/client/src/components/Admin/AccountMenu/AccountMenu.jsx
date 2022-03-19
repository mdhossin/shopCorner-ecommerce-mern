/**
 *
 * AccountMenu
 *
 */

import React from "react";
import { Collapse, Navbar } from "react-bootstrap";

import { Link } from "react-router-dom";

import Button from "../../Common/Button/Button";

const AccountMenu = (props) => {
  const { isMenuOpen, links, toggleMenu } = props;

  return (
    <div className="panel-sidebar section" style={{ marginTop: "500px" }}>
      <Button
        text="Dashboard Menu"
        className={`${isMenuOpen ? "menu-panel" : "menu-panel collapse"}`}
        ariaExpanded={isMenuOpen ? "true" : "false"}
        // ariaLabel={isMenuOpen ? 'dashboard menu expanded' : 'dashboard menu collapse'}
        onClick={toggleMenu}
      />
      <h3 className="panel-title">Account</h3>

      <ul className="panel-links">
        {links.map((link, index) => (
          <li key={index}>
            {console.log(link.name, "link")}
            <Link to={"/dashboard" + link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountMenu;

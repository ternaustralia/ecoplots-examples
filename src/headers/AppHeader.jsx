import {
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./AppHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function AppTitle() {
  return (
    <h3 >
      Ecoplots Examples
    </h3>
  );
}

function AppMenu() {
  return (
    <Nav navbar>
      <NavItem>
        <NavLink href="https://ecoplots.tern.org.au/" target="_blank">
          EcoPlots
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://ecoplots.tern.org.au/api/v1.0/ui" target="_blank">
          EcoPlots API
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://github.com/ternaustralia/ecoplots-examples" target="_blank">
          <FontAwesomeIcon icon={faGithub} /> Sources
        </NavLink>
      </NavItem>

    </Nav>
  );
}

export { AppTitle, AppMenu };

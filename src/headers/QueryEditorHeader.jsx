import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";

import "./QueryEditorHeader.scss";


function QueryEditorAppTitle() {
  return (
    <h3>
      Ecoplots Examples
    </h3>
  );
}

function QueryEditorAppMenu({ func }) {
  return (
    <Nav navbar>
      <NavItem>
        <NavLink href="https://virtuoso.tern.org.au/" target="_blank">
          Virtuoso
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="https://virtuoso.tern.org.au/conductor/isql.vspx" target="_blank">
          Virtuoso iSQL
        </NavLink>
      </NavItem>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Common Queries
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem onClick={() => func("graph-count")}>
            Graph count
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={() => func("triples-count")}>
            Total triples count
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </Nav>
  );
}

export { QueryEditorAppTitle, QueryEditorAppMenu };

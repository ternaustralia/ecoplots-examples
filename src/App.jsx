import {
  NavItem,
  NavLink,
} from "reactstrap";
import { TopBar, Footer, AppHeader, getTernMenu } from "tern-react";
import { CONFIG } from "../config";
import { QueryEditorAppTitle } from "./headers/QueryEditorHeader";
import "./App.scss";

export default function App() {
  const uiApiVersions = CONFIG.UI_VERSION;

  return (
    <>
      <TopBar menuConfig={getTernMenu(CONFIG.MENU)} />
      <AppHeader fluid title={<QueryEditorAppTitle />}>
        {/* <QueryEditorAppMenu func={addTabQueries} /> */}
      </AppHeader>
      <div className="editor" id="yasgui">
        {/* <NavItem> */}
        <NavLink href="https://raw.githack.com/ternaustralia/ecoplots-examples/arunherb-Ecoplots-BDBSA/Ecoplots_example.html" target="_blank">
          Example 1 BDBSA
        </NavLink>
        <NavLink href="https://raw.githack.com/ternaustralia/ecoplots-examples/arunherb-Ecoplots-BDBSA/Ecoplots_example.html" target="_blank">
          Example 2 BDBSA
        </NavLink>
      </div>
      {/* </NavItem> */}
      <div className="app-footer">
        <Footer
          about={getTernMenu(CONFIG.MENU).resources}
          version={uiApiVersions}
        />
      </div>
    </>);

}
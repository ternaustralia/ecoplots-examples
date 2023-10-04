import { useState } from 'react';
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  List,
} from "reactstrap";
import { TopBar, Footer, AppHeader, getTernMenu } from "tern-react";
import { CONFIG } from "../config";
import { AppMenu, AppTitle } from "./headers/AppHeader";
import "./App.scss";

export default function App() {
  const uiApiVersions = CONFIG.UI_VERSION;
  const [activeTab, setActiveTab] = useState('1');
  return (
    <>
      <TopBar menuConfig={getTernMenu(CONFIG.MENU)} />
      <AppHeader fluid title={<AppTitle />}>
        <AppMenu />
      </AppHeader>

      <div className='scripts'>
        <Nav tabs>
          <NavItem>
            <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
              <strong>R scripts</strong>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
              <strong>Python scripts</strong>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className='examples'>
              <p>The Biological Databases of South Australia (BDBSA) is South Australia's flora and fauna database. The BDBSA data is structured based on feature types and parameters and archived on the TERN EcoPlots (https://ecoplots.tern.org.au/search).
                In this examples, we show how to extract information from an API query snippet on EcoPlots and explore and visualise data in R studio.</p>
              {/* <NavLink href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/Ecoplots_example_BDBSA.html" target="_blank">
                Example CSV BDBSA
              </NavLink> */}
              {/* <NavLink href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/BDBSA/Ecoplots_GeoJson_BDBSA.html" target="_blank">
                Example GeoJSON BDBSA <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/BDBSA/Ecoplots_GeoJson_BDBSA.Rmd">(R Markdown)</a>
              </NavLink> */}
              <br />
              <List>
                <li>
                  <a href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/Ecoplots_example_BDBSA.html" target="_blank" >Example CSV BDBSA</a>
                  <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/Ecoplots_example_BDBSA.Rmd" target="_blank" className='second-link'>(R Markdown)</a>
                  <br />
                </li>
                <li>
                  <a href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/BDBSA/Ecoplots_GeoJson_BDBSA.html" target="_blank">Example GeoJSON BDBSA</a>
                  <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/BDBSA/Ecoplots_GeoJson_BDBSA.Rmd" target="_blank" className='second-link'>(R Markdown)</a>
                </li>
              </List>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className='examples'>
              <p>Coming soon!</p>
            </div>
          </TabPane>
        </TabContent>
      </div>

      <div className="app-footer">
        <Footer
          about={getTernMenu(CONFIG.MENU).resources}
          version={uiApiVersions}
        />
      </div>
    </>);

}
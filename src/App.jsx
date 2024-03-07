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
              <p>In these examples, we show how to extract information from the EcoPlots API and explore and visualise data using R studio.</p>
              <p>
                In order to make API requests to the API, you will need your own API Key. Details on how to request an API Key is available on the &nbsp;
                <a href="https://ternaus.atlassian.net/wiki/spaces/TDSAG/pages/2633728070/Testing+EcoPlots+API" target="_blank" >EcoPlots API Guide</a>.
              </p>
              <br />
              <h4>TERN Ecosystem Processes</h4>
              <p>
                TERN's Ecosystem Processes database contains detailed environmental data collected from monitoring TERN operated sites located in significant
                Australian biomes, spanning a wide range of environmental conditions. TERN Ecosystem Processes data are derived by data collection methods that span
                from periodic field surveys and in-situ sensors operated continuously at a local scale.
              </p>
              <br />
              <List>
                <li>
                  <a href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/R%20Studio/Tern-Ecosystem-Processes/Biomass_GeoJson_tutorial_reduced.html" target="_blank">Biomass Example GeoJSON</a>
                  <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/R%20Studio/Tern-Ecosystem-Processes/Biomass_GeoJson_tutorial_reduced.Rmd" target="_blank" className='second-link'>(source code)</a>
                </li>
              </List>
              <br />
              <h4>BDBSA</h4>
              <p>The BDBSA is South Australia's flora and fauna database (<a href="https://www.environment.sa.gov.au/topics/science/information-and-data/biological-databases-of-south-australia" target="_blank" >BDBSA</a>). The BDBSA data on the TERN EcoPlots is structured based on feature types and parameters of interest for flora and fauna from South Australia region.</p>
              <br />
              <List>
                <li>
                  <a href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/R%20Studio/BDBSA/Ecoplots_example_BDBSA.html" target="_blank" >Example CSV</a>
                  <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/R%20Studio/BDBSA/Ecoplots_example_BDBSA.Rmd" target="_blank" className='second-link'>(source code)</a>
                  <br />
                </li>
                <li>
                  <a href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/R%20Studio/BDBSA/Ecoplots_GeoJson_BDBSA.html" target="_blank">Example GeoJSON</a>
                  <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/R%20Studio/BDBSA/Ecoplots_GeoJson_BDBSA.Rmd" target="_blank" className='second-link'>(source code)</a>
                </li>
              </List>
              <br />
              <h4>Williams Wet Tropics vertebrate</h4>
              <p>
                The Williams Wet Tropics vertebrate data set contains records of raw species occurrence records for 144 species of the 350 odd species that are known
                to occurr in the Australian Wet Tropics Bioregion. The data set was compiled by Williams 2006 (<a href="https://rainforest-crc.jcu.edu.au/publications/vertebrate_distributions_full.pdf" target="_blank" >Vertebrates of the Wet Tropics Rainforests of Australia</a>)
                &nbsp;and is structured based on feature types and parameters and archived on the <a href="https://ecoplots.tern.org.au/search" target="_blank" >TERN EcoPlots</a>.
              </p>
              <br />
              <List>
                <li>
                  <a href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/R%20Studio/Williams%20Wet%20Tropics%20Vertebrates/Ecoplots_example_Williams_Vertebrates.html" target="_blank" >Example CSV</a>
                  <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/R%20Studio/Williams%20Wet%20Tropics%20Vertebrates/Ecoplots_example_Williams_Vertebrates.Rmd" target="_blank" className='second-link'>(source code)</a>
                </li>
              </List>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className='examples'>
              <p>In these examples, we show how to extract information from the EcoPlots API and explore and visualise data using Python (notebooks).</p>
              <p>
                In order to make API requests to the API, you will need your own API Key. Details on how to request an API Key is available on the &nbsp;
                <a href="https://ternaus.atlassian.net/wiki/spaces/TDSAG/pages/2633728070/Testing+EcoPlots+API" target="_blank" >EcoPlots API Guide</a>.
              </p>
              <br />
              <h4>TERN Ecosystem Processes</h4>
              <p>
                TERN's Ecosystem Processes database contains detailed environmental data collected from monitoring TERN operated sites located in significant
                Australian biomes, spanning a wide range of environmental conditions. TERN Ecosystem Processes data are derived by data collection methods that span
                from periodic field surveys and in-situ sensors operated continuously at a local scale.
              </p>
              <br />
              <List>
                <li>
                  <a href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/Python/Tern-Ecosystem-Processes/Biomass_CSV.html" target="_blank" >Biomass Example CSV</a>
                  <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/Python/Tern-Ecosystem-Processes/Biomass_CSV.ipynb" target="_blank" className='second-link'>(source code)</a>
                  <br />
                </li>
                <li>
                  <a href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/Python/Tern-Ecosystem-Processes/Biomass_GeoJSON.html" target="_blank">Biomass Example GeoJSON</a>
                  <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/Python/Tern-Ecosystem-Processes/Biomass_GeoJSON.ipynb" target="_blank" className='second-link'>(source code)</a>
                </li>
                <li>
                  <a href="https://raw.githack.com/ternaustralia/ecoplots-examples/develop/Python/Tern-Ecosystem-Processes/BirdOccurrence_CSV.html" target="_blank">Bird Occurrence Example CSV</a>
                  <a href="https://github.com/ternaustralia/ecoplots-examples/blob/develop/Python/Tern-Ecosystem-Processes/BirdOccurrence_CSV.ipynb" target="_blank" className='second-link'>(source code)</a>
                </li>
              </List>
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
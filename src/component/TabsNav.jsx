import React, { Component } from 'react';
import Chevron from 'react-chevron';
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

class TabsNav extends Component {
    constructor(props) {
        super(props);
        this.state = { selectTab: 0 }
    };
    
    handleSelect = (ind) => {
        this.setState({ selectTab: ind });
    };
    
    handleButtonClick = () => {
        this.setState({ selectTab: this.state.selectTab + 1 });
    };

    handleMinusClick = () => {
        this.setState({ selectTab: this.state.selectTab - 1 });
    };
    render() { 
        return ( 
            <>
            <div className="container mt-5">
                <div className="card">
                    <div className="card-body">
                        <Tabs selectedIndex={this.state.selectTab} onSelect={this.handleSelect}>
                            <TabList>
                                <Tab>Tab1</Tab>
                                <Tab>Tab2</Tab>
                                <Tab>Tab3</Tab>
                                <Tab>Tab4</Tab>
                                <Tab>Tab5</Tab>
                                <Tab>Tab6</Tab>
                                <Tab>Tab7</Tab>
                                <Tab>Tab8</Tab>
                            </TabList>
                            <TabPanel>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga?</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla soluta, non laborum mollitia inventore hic?</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione earum nisi repellat ipsa, veniam sapiente in saepe voluptates tempore corrupti.</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia quis ab assumenda aut tenetur nostrum.</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sequi dolorum esse molestiae.</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis impedit ex rerum nesciunt illum! Distinctio, architecto voluptatibus?</p>
                            </TabPanel>
                            <TabPanel>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit delectus quod eligendi eveniet assumenda itaque accusantium omnis id?</p>
                            </TabPanel>
                        </Tabs>
                        <div className="text-center mt-3">
                            {this.state.selectTab > 0 ? <button className="btn btn-primary" onClick={this.handleMinusClick}><Chevron direction={'left'}/></button> : null}
                            {this.state.selectTab === 7 ? null : <button className="btn btn-primary ml-3" onClick={this.handleButtonClick}><Chevron direction={'right'}/></button>}
                        </div>
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default TabsNav;
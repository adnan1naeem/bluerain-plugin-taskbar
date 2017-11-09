import Plugin from "../../src/index"
import BR, {Plugins, BlueRainProvider, App}  from  '@blueeast/bluerain-os';
import  React, {Component} from 'react';
import {mount, shallow,  render, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavAppItem from  '../../src/common/Buttons/NavAppItem';
import withsystemNav from  '../../src/redux/withSystemNav';
import configureMockStore from 'redux-mock-store';
import {MuiThemeProvider} from 'material-ui';
import { Provider } from 'react-redux';

configure({ adapter: new  Adapter() });

import{
	enableSystemNav,
	dockSystemNav,
	setStateSystemNav,
	hideLabelsSystemNav,
	undockSystemNav,
	toggleSystemNav,
	closeSystemNav,
	openSystemNav,
    disableSystemNav,
    showLabelsSystemNav
}
from  '../../src/redux/actions';




configure({ adapter: new  Adapter() });

beforeEach(() => {
	document.body.innerHTML = '<div class="app-container">' + '</div>';
});

describe('Taskbar  Plugin Test', () => {

    it('should register plugin successfully',() => {
        BR.Plugins.register(Plugin);
        const plugin = BR.Plugins.get(Plugin.slug);
        expect(plugin).toBeTruthy();
    }); 
    it('should register component: NavAppItem', () => {
        BR.boot();
        const keys=Object.keys(BR.Components.ComponentsTable)	;
        expect(keys).toContain('NavAppItem');
    });

    it('should register  component NavDividerItem successfully',() => {
        BR.boot();
        const keys=Object.keys(BR.Components.ComponentsTable);
        expect(keys).toContain('NavDividerItem');
    });

    it('should register  component NavSpacerItem successfully',() => {
        BR.boot();
        const keys=Object.keys(BR.Components.ComponentsTable);
        expect(keys).toContain('NavSpacerItem');
    });

	 it('It should  have event :plugin.window_info.resize', () => {
        const keys=Object.keys(BR.Events._events);
        expect(keys).toContain('plugin.window_info.resize');
   
    });

    it('It should  return  store State  ',()=>{
        BR.boot();
        let state=BR.refs.store.getState();
        expect(state).toBeTruthy();        
    });
   
        it('should  return length of NavAppItem component', () => {
            
            const wrapper = render(
                <BlueRainProvider>
                <NavAppItem  hideLabels={true} slug="sss"  />
                </BlueRainProvider>
            );
             expect(wrapper.find(NavAppItem)).toBeDefined();
        });


    });
    


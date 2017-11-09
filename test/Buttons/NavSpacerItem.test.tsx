import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  React, {Component} from 'react';

import NavSpacerItem from  '../../src/common/Buttons/NavSpacerItem';

configure({ adapter: new  Adapter() });

describe ('NavspacerItem Test', () => {
    it('should return length of NavspacerItem component', () => {
        
        const wrapper = mount(
            <NavSpacerItem />
        );
         expect(wrapper.find(NavSpacerItem).length).toBeDefined();
    });
})
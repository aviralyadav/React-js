import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DemoTest from './DemoTest';

configure({ adapter: new Adapter() });

describe('<DemoTest />', ()=>{
    it('should render successfully', ()=>{
        const component = shallow(<DemoTest />);
        expect(component).toHaveLength(1);
    });
    it('should render with props correctly', ()=>{
        const component = shallow(<DemoTest name={'avi'} />);
        expect(component.instance().props.name).toBe('avi');
    });
    it('on click button, should increase counter value', ()=>{
        const component = shallow(<DemoTest name={'abc'} />);
        console.log(component.instance().state);
        const button = component.find('button');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');
        button.simulate('click');   
        // console.log(component);
        // console.log(component.props());
        
        expect(component.state().counter).toEqual(5);
    });
    it('should have h2 heading', ()=>{
        const component = shallow(<DemoTest />);
        expect(component.find('h2')).toHaveLength(1);
    });
});

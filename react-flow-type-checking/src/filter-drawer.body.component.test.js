import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FilterDrawerBody} from './filter-drawer-body-component';
import mockData from './filter-options.json';
// import { shallowWithProviders, mountWithProviders } from './test-utils';
// import 

configure({adapter: new Adapter()});
let arr = [];
    for (let key in mockData.aggregations){
      arr.push({key, data:mockData.aggregations[key]});
    }
    //console.log(arr);


describe('<Body Drawer />', ()=>{
    it('return function', ()=>{
        const component = typeof FilterDrawerBody;
        expect(component).toEqual('function');
    });
    it('return a ExpansionPanel', ()=> {
        const wrapper = mount(<FilterDrawerBody />);
       expect(wrapper.find('ExpansionPanel').length).toEqual(10);//7
    });
    it('return a ExpansionPanelSummary', ()=> {
        const wrapper = mount(<FilterDrawerBody />);
       expect(wrapper.find('ExpansionPanelSummary').length).toEqual(10);
    });
    it('return a ExpansionPanelDetails', ()=> {
        const wrapper = mount(<FilterDrawerBody />);
       expect(wrapper.find('ExpansionPanelDetails').length).toEqual(10);
    });
    it('should have passed props', () => {
        const wrapper = mount(  ////shallowWithProviders
          <FilterDrawerBody class={'rootCheck'} isOpen={true} />
        );
        expect(wrapper.props().class).toEqual('rootCheck');
        expect(wrapper.instance().props).toHaveProperty('isOpen');
    });
    it('return FormGroup element', ()=>{
        const wrapper = mount(<FilterDrawerBody />);
        expect(wrapper.find('FormGroup').length).toEqual(11);
    });
    it('check prop dataCollection passing to child component InputYearRange', ()=>{
        const wrapper = mount(<FilterDrawerBody />);
        expect(wrapper.find('InputYearRange').prop('dataCollection')).toHaveLength(45);
    });
    it('check prop maximumLengthOfYear passing to child component InputYearRange', ()=>{
        const wrapper = mount(<FilterDrawerBody />);
        expect(wrapper.find('InputYearRange').prop('maximumLengthOfYear')).toEqual(3);
    });
    it('check prop id to child component InputYearRange', ()=>{
        const wrapper = mount(<FilterDrawerBody />);
        expect(wrapper.find('InputYearRange').prop('id')).toEqual('Year');
    });
    it('check prop isNative to child component InputYearRange', ()=>{
        const wrapper = mount(<FilterDrawerBody />);
        expect(wrapper.find('InputYearRange').prop('isNative')).toEqual(true);
    });
});
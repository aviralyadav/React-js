import React from 'react';
import {shallow, configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FilterDrawerBody} from './filter-drawer-body-component';
import mockData from './filter-options.json';
// import { shallowWithProviders, mountWithProviders } from './test-utils';
import type { ExternalProps } from './filter-drawer-body-component'; 
import Remove from '@material-ui/icons/Remove';

const bodyProps: ExternalProps = {
    isOpen: false,
    onClick: jest.fn()
}

configure({adapter: new Adapter()});
let arr = [];
    for (let key in mockData.aggregations){
      arr.push({key, data:mockData.aggregations[key]});
    }
    //console.log(arr);
    
const yearData = [
    { key: '2018', doc_count: 15 },
  { key: '2017', doc_count: 7 },
  { key: '2016', doc_count: 23 },
]
describe('<Body Drawer />', ()=>{
    let comp;
  beforeEach(() => {
    comp = shallow(<FilterDrawerBody
      dataCollection={yearData}
      showIcon={jest.fn}
    />);
  });
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
    it('check on button click flag is true', ()=>{
        const comp = mount(<FilterDrawerBody />);
        const wrapper = comp.childAt(0).instance();
        const button = comp.find('ExpansionPanelSummary').first();
        button.simulate('click');
        expect(wrapper.state.show).toBe(true);
    });
    it('check if first expansion is clicked and return index 0', ()=>{
        const comp = mount(<FilterDrawerBody />);
        const wrapper = comp.childAt(0).instance();
        wrapper.showIcon(0);
        expect(wrapper.state.iconValue).toEqual(0);
    });
    it('check if Remove Icon is there', ()=>{
        const comp = mount(<FilterDrawerBody />);
        const wrapper = comp.childAt(0).instance();
        wrapper.setState({show: true});
        console.log(wrapper.state.show);
        expect(comp.find('Remove').length).toEqual(1);
    });
});
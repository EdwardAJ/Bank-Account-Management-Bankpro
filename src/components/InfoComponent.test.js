import 'jsdom-global/register';
import React from 'react';
import { shallow } from 'enzyme';
import InfoComponent from './InfoComponent';

describe("InfoComponent", () => {
    it("should match this component", () => {
        const component = shallow(<InfoComponent />);
        expect(component.getElements()).toMatchSnapshot();
    });
});

describe("InfoComponent", () => {
    it("should render this component correctly", () => {
        const wrapper = shallow(<InfoComponent />);
        expect(wrapper.find('h3')).toHaveLength(4);
        expect(wrapper.find('p')).toHaveLength(4);
    });
});
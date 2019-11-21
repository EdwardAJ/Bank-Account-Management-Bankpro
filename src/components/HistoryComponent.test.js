import React from 'react';
import { shallow } from 'enzyme';
import HistoryComponent from './HistoryComponent';

describe("HistoryComponent", () => {
    it("should match this component", () => {
        const component = shallow(<HistoryComponent />);
        expect(component.getElements()).toMatchSnapshot();
    });
});

describe("HistoryComponent", () => {
    it("should render this component correctly", () => {
        const component = shallow(<HistoryComponent />);
        expect(component.find('.wrapper')).toHaveLength(1);
    });
});
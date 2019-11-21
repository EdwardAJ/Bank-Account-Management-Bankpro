import React from 'react';
import { shallow } from 'enzyme';
import TransferComponent from './TransferComponent';

describe("TransferComponent", () => {
    it("should match this component", () => {
        const component = shallow(<TransferComponent />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
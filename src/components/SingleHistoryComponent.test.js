import React from 'react';
import { shallow } from 'enzyme';
import SingleHistoryComponent from './SingleHistoryComponent';

describe("SingleHistoryComponent", () => {
    it("should render my component", () => {
        const props = {
            type: "Debit",
            amount: "40000",
            accountNumber: "13517115",
            timeDate: "2019.11.12 07:08:09"
        };
        const component = shallow(<SingleHistoryComponent {...props} />);
        expect(component.getElements()).toMatchSnapshot();
    });
});
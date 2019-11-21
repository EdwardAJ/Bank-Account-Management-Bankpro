import React from 'react';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import InfoComponent from './InfoComponent';
import TransferComponent from './TransferComponent';
import HistoryComponent from './HistoryComponent';

describe("MainPage", () => {
    it("should render my component", () => {
        const component = shallow(<MainPage />);
        expect(component.setState({ choice: 1 }));
        expect(component.find(InfoComponent)).toHaveLength(1);
        expect(component.find(TransferComponent)).toHaveLength(0);
        expect(component.find(HistoryComponent)).toHaveLength(0);

        expect(component.setState({ choice: 2 }));
        expect(component.find(InfoComponent)).toHaveLength(0);
        expect(component.find(TransferComponent)).toHaveLength(1);
        expect(component.find(HistoryComponent)).toHaveLength(0);

        expect(component.setState({ choice: 3 }));
        expect(component.find(InfoComponent)).toHaveLength(0);
        expect(component.find(TransferComponent)).toHaveLength(0);
        expect(component.find(HistoryComponent)).toHaveLength(1);
    });
});

describe("MainPage", () => {
    it("should simulate click", () => {
        const component = shallow(<MainPage />);
        expect(component.find('#id-2')).toHaveLength(1);
        component.find('#id-2').simulate('click');
        expect(component.state('choice')).toEqual(2);

        expect(component.find('#id-3')).toHaveLength(1);
        component.find('#id-3').simulate('click');
        expect(component.state('choice')).toEqual(3);

        expect(component.find('#id-1')).toHaveLength(1);
        component.find('#id-1').simulate('click');
        expect(component.state('choice')).toEqual(1);
    });
});
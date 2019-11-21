import React from 'react';
import { shallow } from 'enzyme';
import AuthPage from './AuthPage';

describe("AuthPage", () => {
    it("should render my component", () => {
        const component = shallow(<AuthPage />);
        expect(component.getElements()).toMatchSnapshot();
    });
});

describe("AuthPage", () => {
    it("should render this component", () => {
        const component = shallow(<AuthPage />);
        expect(component.find('#login-header').text()).toEqual(" Masukkan Nomor Rekening ");
        expect(component.exists('.form')).toEqual(true);
    });
});
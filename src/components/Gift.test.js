import React from 'react'
import { shallow } from 'enzyme';

import Gift from './Gift'


describe('Gift', () => {
    const gift = shallow(<Gift />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    })

    it('intilsiszes a person and present in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: '' })
    });

    describe('typeng the into the person input', () => {
        const person = 'Uncle';

        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: person } })
        })

        it('update the person `state`', () => {
            expect(gift.state().person).toEqual(person)
        })
    })


    describe('when typing into the persent input', () => {
        const present = 'Golf Club'

        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: present } })
        })

        it('updtae the persent `state`', () => {
            expect(gift.state().present).toEqual(present)
        })
    })
}) 
import React from 'react'
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
    const app = shallow(<App />);

    it('renders coreclty', () => {
        expect(app).toMatchSnapshot();
    })

    it('inicialize `state` with an epmty list of gift', () => {
        expect(app.state().gifts).toEqual([]);
    })

    describe('when clickin `add-gift` button', () => {

const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        })

        afterEach(() => {
            app.setState({ gifts: [] })
        })

        it('add a nwe gift tho `state`', () => {
            expect(app.state().gifts).toEqual([{ id }]);
        });


        it('add ne gift to the render list', () => {
            expect(app.find('.gift-list').children().length).toEqual(1)
        })

        it('create a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        })

        describe('and the user wants to remove the added gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id)
            })

            it('remove the gift from `state', () => {
                expect(app.state().gifts).toEqual([])
            })
        });
    })


})


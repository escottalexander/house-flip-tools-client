import { reducer } from './index';
import * as actions from '../actions';
//import { image1, image2 } from '../initialStateImages'



describe('reducer', () => {
    const initialState = {
        properties: [],
        loading: false,
        error: null,
        exampleReady: false,
        slugify(text) {
            return text
                .toString()
                .toLowerCase()
                .replace(/[\s\W-]+/g, '-');
        },
        prettify(number) {
            let numArr = number.toString().split("");
            let prettyNumber = [];
            for (let index = 0; index < numArr.length; index++) {
                if ((numArr.length - index) % 3 === 0 && index !== 0) {
                    prettyNumber.push(",");
                }
                prettyNumber.push(numArr[index]);
            }
            return prettyNumber.join("");
        }
    };
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, { type: '__UNKNOWN' });
        expect(JSON.stringify(state)).toEqual(JSON.stringify(initialState));
    });
});

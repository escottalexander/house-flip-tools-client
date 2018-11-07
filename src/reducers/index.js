import * as actions from '../actions';

const initialState = {
    properties: [
        {
            propertyId: 125,
            slug: "103-cherry-tree-lane",
            imgSrc: "",
            address: "103 Cherry Tree lane",
            city: "Woodstock",
            state: "GA",
            zip: "30189",
            description: "Newly renovated 3 bedroom, 1 1/2 bath with new kitchen, all new appliances, flooring, carpet, paint, light fixtures, ceiling fans in all bedrooms. New deck with private back yard with a beautiful creek running that give a perfect tranquil relaxing yard to sit back and enjoy. (Agents Protected). Contact: 770-316-8580",
            price: 159000,
            projectedValue: 250000,
            yearBuilt: 1984,
            roofType: "composite",
            foundationType: "footing",
            exteriorMaterial: "wood",
            basement: "unfinished",
            notes: "",
            floorSize: 1680,
            lotSize: 1.23,
            bedrooms: 3,
            bathrooms: 1.5,
            stories: 2,
            improvements: [
                {
                    id: 12345,
                    name: "new porch",
                    cost: 10000,
                    edit: false
                },
                {
                    id: 12346,
                    name: "new paint",
                    cost: 10000,
                    edit: false
                },
                {
                    id: 12347,
                    name: "new roof",
                    cost: 10000,
                    edit: false
                }
            ]
        }
    ],
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

export const reducer = (state = initialState, action) => {
    if (action.type === actions.LOAD) {
        console.log(action)
        return Object.assign({}, state, {

            editPropertyData: action.data,

        });
    }
    else if (action.type === actions.ADD_LIST) {
        return Object.assign({}, state, {
            lists: [...state.lists, {
                title: action.title,
                cards: []
            }]
        });
    }
    else if (action.type === actions.ADD_CARD) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [...list.cards, {
                    text: action.text
                }]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    return state;
};
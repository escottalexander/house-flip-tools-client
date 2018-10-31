import * as actions from '../actions';

const initialState = {
    properties: [
        {
            propertyId: 123,
            imgSrc: "",
            address: "17 Cherry Tree lane",
            description: "blah blah blah",
            slug: "17-cherry-tree-lane"
        },
        {
            propertyId: 124,
            imgSrc: "",
            address: "18 Cherry Tree lane",
            description: "blah blah blah",
            slug: "18-cherry-tree-lane"
        },
        {
            propertyId: 125,
            imgSrc: "",
            address: "19 Cherry Tree lane",
            description: "blah blah blah",
            slug: "19-cherry-tree-lane"
        }
    ],
    slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .replace(/[\s\W-]+/g, '-');
    }
};

export const reducer = (state = initialState, action) => {
    if (action.type === actions.ADD_LIST) {
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
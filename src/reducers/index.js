import * as actions from '../actions';

const initialState = {
    properties: [],
    loading: false,
    error: null,
    exampleReady: false,
    analysisVisible: false,
    profitMargin: 0,
    slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .replace(/[\s\W-]+/g, '-');
    },
    prettify(number) {
        if (number) {
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
    }
};

export const reducer = (state = initialState, action) => {
    // GET USER PROPERTIES
    if (action.type === actions.GET_USER_PROPERTIES_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === actions.GET_USER_PROPERTIES_SUCCESS) {
        return Object.assign({}, state, {
            properties: action.properties.properties,
            loading: false,
            error: null
        });
    }
    if (action.type === actions.GET_USER_PROPERTIES_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    // ADD PROPERTY
    if (action.type === actions.ADD_PROPERTY_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === actions.ADD_PROPERTY_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            error: null
        });
    }
    if (action.type === actions.ADD_PROPERTY_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }

    /// CHANGE MARGIN
    if (action.type === actions.CHANGE_MARGIN) {
        return Object.assign({}, state, {
            profitMargin: action.value,
        });
    }

    /// LOAD EDIT DATA
    if (action.type === actions.LOAD) {
        return Object.assign({}, state, {
            editPropertyData: action.data,
        });
    }
    /// CLEAR EDIT DATA
    if (action.type === actions.CLEAR_EDIT_DATA) {
        return Object.assign({}, state, {
            editPropertyData: null
        });
    }

    /// SHOW ANALYSIS
    if (action.type === actions.SHOW_ANALYSIS) {
        return Object.assign({}, state, {
            analysisVisible: true
        });
    }
    /// HIDE ANALYSIS
    if (action.type === actions.HIDE_ANALYSIS) {
        return Object.assign({}, state, {
            analysisVisible: false
        });
    }

    /// SAVE PROPERTY
    if (action.type === actions.SAVE_PROPERTY_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === actions.SAVE_PROPERTY_SUCCESS) {
        let properties = state.properties.filter((property) => {
            return property.propertyId !== action.property.propertyId;
        })
        const allProperties = Object.assign([...properties, action.property]);
        const sortedProperties = allProperties.sort((a, b) => a.propertyId - b.propertyId)
        return Object.assign({}, state, {
            properties: [...sortedProperties],
            loading: false,
            error: null
        });
    }
    if (action.type === actions.SAVE_PROPERTY_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }


    /// SAVE IMPROVEMENT
    if (action.type === actions.SAVE_IMPROVEMENT_SUCCESS) {
        let properties = state.properties.filter((property) => {
            return property.propertyId !== action.improvement.propertyId;
        })
        const property = Object.assign({}, state.properties.find(property => property.propertyId === action.improvement.propertyId));
        const improvements = property.improvements.filter(item => item.id !== action.improvement.id);
        const allImprovements = Object.assign([...improvements, action.improvement]);
        const sortedImprovements = allImprovements.slice().sort((a, b) => a.id - b.id)
        property.improvements = sortedImprovements;
        const allProperties = Object.assign([...properties, property]);
        const sortedProperties = allProperties.sort((a, b) => a.propertyId - b.propertyId)
        return Object.assign({}, state, {
            properties: [...sortedProperties],
            loading: false,
            error: null
        });
    }
    if (action.type === actions.SAVE_IMPROVEMENT_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === actions.SAVE_IMPROVEMENT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }

    /// ADD IMPROVEMENT
    if (action.type === actions.ADD_IMPROVEMENT_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === actions.ADD_IMPROVEMENT_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            error: null
        });
    }
    if (action.type === actions.ADD_IMPROVEMENT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    /// DELETE PROPERTY
    if (action.type === actions.DELETE_PROPERTY_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === actions.DELETE_PROPERTY_SUCCESS) {
        return Object.assign({}, state, {
            loading: false,
            error: null
        });
    }
    if (action.type === actions.DELETE_PROPERTY_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    /// DELETE IMPROVEMENT
    if (action.type === actions.DELETE_IMPROVEMENT_REQUEST) {
        return Object.assign({}, state, {
            loading: true,
            error: null
        });
    }
    if (action.type === actions.DELETE_IMPROVEMENT_SUCCESS) {
        const property = Object.assign({}, state.properties.find(property => property.propertyId === action.improvement.property_id));
        const improvements = property.improvements.filter(item => item.id !== action.improvement.id);
        property.improvements = improvements;
        const properties = state.properties.filter((property) => {
            return property.propertyId !== action.improvement.property_id;
        })
        const allProperties = Object.assign([...properties, property]);
        const sortedProperties = allProperties.sort((a, b) => a.propertyId - b.propertyId)
        return Object.assign({}, state, {
            properties: [...sortedProperties],
            loading: false,
            error: null
        });
    }
    if (action.type === actions.DELETE_IMPROVEMENT_ERROR) {
        return Object.assign({}, state, {
            loading: false,
            error: action.error
        });
    }
    // EXAMPLE ACCOUNT INITIALIZED
    if (action.type === actions.EXAMPLE_ACCOUNT_INITIALIZED) {
        return Object.assign({}, state, {
            exampleReady: true
        });
    }
    if (action.type === actions.EXAMPLE_ACCOUNT_UNINITIALIZED) {
        return Object.assign({}, state, {
            exampleReady: false
        });
    }

    return state;
};
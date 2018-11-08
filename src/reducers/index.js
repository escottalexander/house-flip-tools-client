import * as actions from '../actions';

const initialState = {
    properties: [
        {
            propertyId: 123,
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
                    propertyId: 123,
                    id: 12345,
                    name: "new porch",
                    cost: 10000
                },
                {
                    propertyId: 123,
                    id: 12346,
                    name: "new paint",
                    cost: 10000
                },
                {
                    propertyId: 123,
                    id: 12347,
                    name: "new roof",
                    cost: 10000
                }
            ]
        },
        {
            propertyId: 125,
            slug: "17-cherry-tree-lane",
            imgSrc: "",
            address: "17 Cherry Tree lane",
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
                    propertyId: 125,
                    id: 12345,
                    name: "new porch",
                    cost: 10000
                },
                {
                    propertyId: 125,
                    id: 12346,
                    name: "new paint",
                    cost: 10000
                },
                {
                    propertyId: 125,
                    id: 12347,
                    name: "new roof",
                    cost: 10000
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
    /// LOAD EDIT DATA
    if (action.type === actions.LOAD) {
        return Object.assign({}, state, {
            editPropertyData: action.data,
        });
    }
    /// SAVE PROPERTY
    else if (action.type === actions.SAVE_PROPERTY) {
        let properties = state.properties.filter((property) => {
            if (property.propertyId !== action.property.propertyId) {
                return property;
            }
        })
        const allProperties = Object.assign([...properties, action.property]);
        const sortedProperties = allProperties.sort((a, b) => a.propertyId - b.propertyId)
        return Object.assign({}, state, {
            properties: [...sortedProperties]
        });
    }
    /// CLEAR EDIT DATA
    else if (action.type === actions.CLEAR_EDIT_DATA) {
        return Object.assign({}, state, {
            editPropertyData: null
        });
    }
    /// SAVE IMPROVEMENT
    else if (action.type === actions.SAVE_IMPROVEMENT) {
        let properties = state.properties.filter((property) => {
            if (property.propertyId !== action.improvement.propertyId) {
                return property;
            }
        })
        const property = Object.assign({}, state.properties.find(property => property.propertyId === action.improvement.propertyId));
        const improvements = property.improvements.filter(item => item.id !== action.improvement.id);
        const allImprovements = Object.assign([...improvements, action.improvement]);
        const sortedImprovements = allImprovements.slice().sort((a, b) => a.id - b.id)
        property.improvements = sortedImprovements;
        const allProperties = Object.assign([...properties, property]);
        const sortedProperties = allProperties.sort((a, b) => a.propertyId - b.propertyId)
        return Object.assign({}, state, {
            properties: [...sortedProperties]

        });
    }
    /// ADD PROPERTY
    else if (action.type === actions.ADD_PROPERTY) {
        const properties = state.properties.filter((property) => {
            if (property.propertyId !== action.property.propertyId) {
                return property;
            }
        })
        const propertyId = Math.floor((Math.random() * 100) * (100 * Math.random()) * (100 * Math.random()));
        const template = {
            propertyId: propertyId,
            slug: initialState.slugify(action.property.address),
            imgSrc: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            description: "",
            price: "",
            projectedValue: "",
            yearBuilt: "",
            roofType: "",
            foundationType: "",
            exteriorMaterial: "",
            basement: "",
            notes: "",
            floorSize: "",
            lotSize: "",
            bedrooms: "",
            bathrooms: "",
            stories: "",
            improvements: []
        }
        const finalProperty = Object.assign({}, template, action.property);
        const allProperties = Object.assign([...properties, finalProperty]);
        const sortedProperties = allProperties.sort((a, b) => a.propertyId - b.propertyId)
        return Object.assign({}, state, {
            properties: [...sortedProperties]
        });
    }
    /// ADD IMPROVEMENT
    else if (action.type === actions.ADD_IMPROVEMENT) {
        const property = Object.assign({}, state.properties.find(property => property.propertyId === action.improvement.propertyId));
        const properties = state.properties.filter((property) => {
            if (property.propertyId !== action.improvement.propertyId) {
                return property;
            }
        })
        const improvementId = Math.floor((Math.random() * 100) * (100 * Math.random()) * (100 * Math.random()));
        const template = {
            propertyId: action.improvement.propertyId,
            id: improvementId,
            name: "",
            cost: ""
        }
        const finalImprovement = Object.assign({}, template, action.improvement);
        const improvements = property.improvements;
        const allImprovements = Object.assign([...improvements, finalImprovement]);
        const sortedImprovements = allImprovements.slice().sort((a, b) => a.id - b.id)
        property.improvements = sortedImprovements;
        const allProperties = Object.assign([...properties, property]);
        const sortedProperties = allProperties.sort((a, b) => a.propertyId - b.propertyId)
        console.log(sortedProperties)
        return Object.assign({}, state, {
            properties: [...sortedProperties]
        });
    }
    /// DELETE PROPERTY
    if (action.type === actions.DELETE_PROPERTY) {
        const properties = state.properties.filter((property) => {
            if (property.propertyId !== action.propertyId) {
                return property;
            }
        })
        const allProperties = Object.assign([...properties]);
        const sortedProperties = allProperties.sort((a, b) => a.propertyId - b.propertyId)
        return Object.assign({}, state, {
            properties: [...sortedProperties]
        });
    }
    /// DELETE IMPROVEMENT
    if (action.type === actions.DELETE_IMPROVEMENT) {
        const property = Object.assign({}, state.properties.find(property => property.propertyId === action.improvement.propertyId));
        const improvements = property.improvements.filter(item => item.id !== action.improvement.id);
        property.improvements = improvements;
        const properties = state.properties.filter((property) => {
            if (property.propertyId !== action.improvement.propertyId) {
                return property;
            }
        })
        const allProperties = Object.assign([...properties, property]);
        const sortedProperties = allProperties.sort((a, b) => a.propertyId - b.propertyId)
        return Object.assign({}, state, {
            properties: [...sortedProperties]
        });
    }


    return state;
};
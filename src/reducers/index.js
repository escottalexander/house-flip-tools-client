import * as actions from '../actions';

const initialState = {
    properties: [
        {
            propertyId: 123,
            slug: "17-cherry-tree-lane",
            imgSrc: "",
            address: "17 Cherry Tree lane",
            city: "Woodstock",
            state: "GA",
            zip: "30189",
            description: "Newly renovated 3 bedroom, 1 1/2 bath with new kitchen, all new appliances, flooring, carpet, paint, light fixtures, ceiling fans in all bedrooms. New deck with private back yard with a beautiful creek running that give a perfect tranquil relaxing yard to sit back and enjoy. (Agents Protected). Contact: 770-316-8580",
            price: "159000",
            yearBuilt: "1984",
            roofType: "composite",
            foundationType: "footing",
            exteriorMaterial: "wood",
            basement: "unfinished",
            floorSize: {
                size: "1680",
                unit: "sq/ft"
            },
            roofSize: {
                size: "890",
                unit: "sq/ft"
            },
            lotSize: {
                size: "1.23",
                unit: "acres"
            },
            bedrooms: "3",
            bathrooms: "1.5",
            stories: "2",
            roomData: {
                room1: {
                    name: "Master Bedroom",
                    dimensions: {
                        x: {
                            length: "12",
                            unit: "ft"
                        },
                        y: {
                            length: "10",
                            unit: "ft"
                        },
                        z: {
                            height: "9",
                            unit: "ft"
                        }
                    }
                },
                room2: {
                    name: "Bedroom 1",
                    dimensions: {
                        x: {
                            length: "12",
                            unit: "ft"
                        },
                        y: {
                            length: "10",
                            unit: "ft"
                        },
                        z: {
                            height: "9",
                            unit: "ft"
                        }
                    }
                },
                room3: {
                    name: "Bedroom 2",
                    dimensions: {
                        x: {
                            length: "12",
                            unit: "ft"
                        },
                        y: {
                            length: "10",
                            unit: "ft"
                        },
                        z: {
                            height: "9",
                            unit: "ft"
                        }
                    }
                }
            },
            improvementData: {
                roof: {
                    type: "replace",
                    estimatedCost: "5000"
                },
                flooring: {
                    surface1: {
                        type: "replace",
                        area: {
                            number: "600",
                            unit: "sq/ft"
                        },
                        material: "tile",
                        materialCost: {
                            number: "7",
                            unit: "sq/ft"
                        },
                        laborCost: "4000"
                    },
                    surface2: {
                        type: "replace",
                        area: {
                            number: "150",
                            unit: "sq/ft"
                        },
                        material: "tile",
                        materialCost: {
                            number: "7",
                            unit: "sq/ft"
                        },
                        laborCost: "1000"
                    },
                    surface3: {
                        type: "replace",
                        area: {
                            number: "830",
                            unit: "sq/ft"
                        },
                        material: "carpet",
                        materialCost: {
                            number: "1",
                            unit: "sq/ft"
                        },
                        laborCost: "3000"
                    }
                },
                interiorPaint: {
                    paintCost: {
                        number: "15",
                        unit: "gallon"
                    },
                    laborCost: "5000"
                },
                landscaping: true,
                exterior: true,
            }

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
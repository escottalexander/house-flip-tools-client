import { image1, image2 } from './exampleAccountImages'
export default properties = {
    properties: [
        {
            propertyId: 123,
            slug: "103-cherry-tree-lane",
            imgSrc: image1,
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
            imgSrc: image2,
            address: "17 Cherry Tree lane",
            city: "Woodstock",
            state: "GA",
            zip: "30189",
            description: "Newly renovated 3 bedroom, 1 1/2 bath with new kitchen, all new appliances, flooring, carpet, paint, light fixtures, ceiling fans in all bedrooms. New deck with private back yard with a beautiful creek running that give a perfect tranquil relaxing yard to sit back and enjoy. (Agents Protected). Contact: 770-316-8580",
            price: 159000,
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
}
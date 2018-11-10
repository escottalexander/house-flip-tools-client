import { LOAD, loadData, SAVE_PROPERTY, saveProperty, SAVE_IMPROVEMENT, saveImprovement, ADD_PROPERTY, addProperty, ADD_IMPROVEMENT, addImprovement, DELETE_PROPERTY, deleteProperty, DELETE_IMPROVEMENT, deleteImprovement, CLEAR_EDIT_DATA, clearEditData, EDIT_IMPROVEMENT, editImprovement, REGISTER_USER, registerUser } from './index';

describe('loadData', () => {
    it('Should return the action', () => {
        const data = 'IL0V3P1ZZA';
        const action = loadData(data);
        expect(action.type).toEqual(LOAD);
        expect(action.data).toEqual(data);
    });
});

describe('saveProperty', () => {
    it('Should return the action', () => {
        const property = [];
        const action = saveProperty(property);
        expect(action.type).toEqual(SAVE_PROPERTY);
        expect(action.property).toEqual(property);
    });
});

describe('saveImprovement', () => {
    it('Should return the action', () => {
        const improvement = [];
        const action = saveImprovement(improvement);
        expect(action.type).toEqual(SAVE_IMPROVEMENT);
        expect(action.improvement).toEqual(improvement);
    });
});

describe('addProperty', () => {
    it('Should return the action', () => {
        const property = [];
        const action = addProperty(property);
        expect(action.type).toEqual(ADD_PROPERTY);
        expect(action.property).toEqual(property);
    });
});

describe('addImprovement', () => {
    it('Should return the action', () => {
        const improvement = [];
        const action = addImprovement(improvement);
        expect(action.type).toEqual(ADD_IMPROVEMENT);
        expect(action.improvement).toEqual(improvement);
    });
});

describe('deleteProperty', () => {
    it('Should return the action', () => {
        const propertyId = 12345;
        const action = deleteProperty(propertyId);
        expect(action.type).toEqual(DELETE_PROPERTY);
        expect(action.propertyId).toEqual(propertyId);
    });
});

describe('deleteImprovement', () => {
    it('Should return the action', () => {
        const improvement = [];
        const action = deleteImprovement(improvement);
        expect(action.type).toEqual(DELETE_IMPROVEMENT);
        expect(action.improvement).toEqual(improvement);
    });
});

describe('clearEditData', () => {
    it('Should return the action', () => {
        const action = clearEditData();
        expect(action.type).toEqual(CLEAR_EDIT_DATA);
    });
});

describe('editImprovement', () => {
    it('Should return the action', () => {
        const improvement = [];
        const action = editImprovement(improvement);
        expect(action.type).toEqual(EDIT_IMPROVEMENT);
        expect(action.improvement).toEqual(improvement);
    });
});

describe('registerUser', () => {
    it('Should return the action', () => {
        const userData = [];
        const action = registerUser(userData);
        expect(action.type).toEqual(REGISTER_USER);
        expect(action.userData).toEqual(userData);
    });
});




import { CHANGE_MARGIN, changeMargin, LOAD, loadData, SAVE_PROPERTY_REQUEST, savePropertyRequest, SAVE_PROPERTY_SUCCESS, savePropertySuccess, SAVE_PROPERTY_ERROR, savePropertyError, SAVE_IMPROVEMENT_REQUEST, saveImprovementRequest, SAVE_IMPROVEMENT_SUCCESS, saveImprovementSuccess, SAVE_IMPROVEMENT_ERROR, saveImprovementError, ADD_PROPERTY_REQUEST, addPropertyRequest, ADD_PROPERTY_SUCCESS, addPropertySuccess, ADD_PROPERTY_ERROR, addPropertyError, ADD_IMPROVEMENT_REQUEST, addImprovementRequest, ADD_IMPROVEMENT_SUCCESS, addImprovementSuccess, ADD_IMPROVEMENT_ERROR, addImprovementError, DELETE_PROPERTY_REQUEST, deletePropertyRequest, DELETE_PROPERTY_SUCCESS, deletePropertySuccess, DELETE_PROPERTY_ERROR, deletePropertyError, DELETE_IMPROVEMENT_REQUEST, deleteImprovementRequest, DELETE_IMPROVEMENT_SUCCESS, deleteImprovementSuccess, DELETE_IMPROVEMENT_ERROR, deleteImprovementError, CLEAR_EDIT_DATA, clearEditData, SHOW_ANALYSIS, showAnalysis, HIDE_ANALYSIS, hideAnalysis } from './index';

describe('loadData', () => {
    it('Should return the action', () => {
        const data = 'IL0V3P1ZZA';
        const action = loadData(data);
        expect(action.type).toEqual(LOAD);
        expect(action.data).toEqual(data);
    });
});

describe('clearEditData', () => {
    it('Should return the action', () => {
        const action = clearEditData();
        expect(action.type).toEqual(CLEAR_EDIT_DATA);
    });
});

describe('changeMargin', () => {
    it('Should return the action', () => {
        const value = 30;
        const action = changeMargin(value);
        expect(action.type).toEqual(CHANGE_MARGIN);
        expect(action.value).toEqual(value);
    });
});

describe('savePropertyRequest', () => {
    it('Should return the action', () => {
        const property = [];
        const action = savePropertyRequest(property);
        expect(action.type).toEqual(SAVE_PROPERTY_REQUEST);
        expect(action.property).toEqual(property);
    });
});

describe('savePropertySuccess', () => {
    it('Should return the action', () => {
        const property = [];
        const action = savePropertySuccess(property);
        expect(action.type).toEqual(SAVE_PROPERTY_SUCCESS);
        expect(action.property).toEqual(property);
    });
});

describe('savePropertyError', () => {
    it('Should return the action', () => {
        const error = [];
        const action = savePropertyError(error);
        expect(action.type).toEqual(SAVE_PROPERTY_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('saveImprovementRequest', () => {
    it('Should return the action', () => {
        const improvement = [];
        const action = saveImprovementRequest(improvement);
        expect(action.type).toEqual(SAVE_IMPROVEMENT_REQUEST);
        expect(action.improvement).toEqual(improvement);
    });
});

describe('saveImprovementSuccess', () => {
    it('Should return the action', () => {
        const improvement = [];
        const action = saveImprovementSuccess(improvement);
        expect(action.type).toEqual(SAVE_IMPROVEMENT_SUCCESS);
        expect(action.improvement).toEqual(improvement);
    });
});

describe('saveImprovementError', () => {
    it('Should return the action', () => {
        const improvement = [];
        const action = saveImprovementError(improvement);
        expect(action.type).toEqual(SAVE_IMPROVEMENT_ERROR);
        expect(action.improvement).toEqual(improvement);
    });
});

describe('addPropertyRequest', () => {
    it('Should return the action', () => {
        const action = addPropertyRequest();
        expect(action.type).toEqual(ADD_PROPERTY_REQUEST);
    });
});

describe('addPropertySuccess', () => {
    it('Should return the action', () => {
        const action = addPropertySuccess();
        expect(action.type).toEqual(ADD_PROPERTY_SUCCESS);
    });
});

describe('addPropertyError', () => {
    it('Should return the action', () => {
        const error = {};
        const action = addPropertyError(error);
        expect(action.type).toEqual(ADD_PROPERTY_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('addImprovementRequest', () => {
    it('Should return the action', () => {
        const action = addImprovementRequest();
        expect(action.type).toEqual(ADD_IMPROVEMENT_REQUEST);
    });
});

describe('addImprovementSuccess', () => {
    it('Should return the action', () => {
        const action = addImprovementSuccess();
        expect(action.type).toEqual(ADD_IMPROVEMENT_SUCCESS);
    });
});

describe('addImprovementError', () => {
    it('Should return the action', () => {
        const error = {};
        const action = addImprovementError(error);
        expect(action.type).toEqual(ADD_IMPROVEMENT_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('deletePropertyRequest', () => {
    it('Should return the action', () => {
        const property = [];
        const action = deletePropertyRequest(property);
        expect(action.type).toEqual(DELETE_PROPERTY_REQUEST);
        expect(action.property).toEqual(property);
    });
});

describe('deletePropertySuccess', () => {
    it('Should return the action', () => {
        const property = [];
        const action = deletePropertySuccess(property);
        expect(action.type).toEqual(DELETE_PROPERTY_SUCCESS);
        expect(action.property).toEqual(property);
    });
});

describe('deletePropertyError', () => {
    it('Should return the action', () => {
        const error = {};
        const action = deletePropertyError(error);
        expect(action.type).toEqual(DELETE_PROPERTY_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('deleteImprovementRequest', () => {
    it('Should return the action', () => {
        const improvement = [];
        const action = deleteImprovementRequest(improvement);
        expect(action.type).toEqual(DELETE_IMPROVEMENT_REQUEST);
        expect(action.improvement).toEqual(improvement);
    });
});
describe('deleteImprovementSuccess', () => {
    it('Should return the action', () => {
        const improvement = [];
        const action = deleteImprovementSuccess(improvement);
        expect(action.type).toEqual(DELETE_IMPROVEMENT_SUCCESS);
        expect(action.improvement).toEqual(improvement);
    });
});
describe('deleteImprovementError', () => {
    it('Should return the action', () => {
        const error = [];
        const action = deleteImprovementError(error);
        expect(action.type).toEqual(DELETE_IMPROVEMENT_ERROR);
        expect(action.error).toEqual(error);
    });
});

describe('showAnalysis', () => {
    it('Should return the action', () => {
        const action = showAnalysis();
        expect(action.type).toEqual(SHOW_ANALYSIS);
    });
});
describe('hideAnalysis', () => {
    it('Should return the action', () => {
        const action = hideAnalysis();
        expect(action.type).toEqual(HIDE_ANALYSIS);
    });
});











export const LOAD = "LOAD";
export const loadData = data => ({
    type: LOAD,
    data
});

export const SAVE_PROPERTY = 'SAVE_PROPERTY';
export const saveProperty = property => ({
    type: SAVE_PROPERTY,
    property
});

export const CLEAR_EDIT_DATA = 'CLEAR_EDIT_DATA';
export const clearEditData = () => ({
    type: CLEAR_EDIT_DATA,
});

export const EDIT_IMPROVEMENT = 'EDIT_IMPROVEMENT';
export const editImprovement = improvement => ({
    type: EDIT_IMPROVEMENT,
    improvement
});

export const ADD_LIST = 'ADD_LIST';
export const addList = title => ({
    type: ADD_LIST,
    title
});

export const ADD_CARD = 'ADD_CARD';
export const addCard = (text, listIndex) => ({
    type: ADD_CARD,
    text,
    listIndex
});
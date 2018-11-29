import { API_BASE_URL } from '../config'
import { SubmissionError } from 'redux-form';
import { normalizeResponseErrors } from './utils';
let token = localStorage.getItem('authToken');





// AUTOFILL FORM FIELDS
export const LOAD = "LOAD";
export const loadData = data => ({
    type: LOAD,
    data
});

export const CLEAR_EDIT_DATA = 'CLEAR_EDIT_DATA';
export const clearEditData = () => ({
    type: CLEAR_EDIT_DATA,
});

// SAVE PROPERTY
export const SAVE_PROPERTY_REQUEST = 'SAVE_PROPERTY_REQUEST';
export const savePropertyRequest = property => ({
    type: SAVE_PROPERTY_REQUEST,
    property
});

export const SAVE_PROPERTY_SUCCESS = 'SAVE_PROPERTY_SUCCESS';
export const savePropertySuccess = property => ({
    type: SAVE_PROPERTY_SUCCESS,
    property
});

export const SAVE_PROPERTY_ERROR = 'SAVE_PROPERTY_ERROR';
export const savePropertyError = error => ({
    type: SAVE_PROPERTY_ERROR,
    error
});

export const saveProperty = property => dispatch => {
    dispatch(savePropertyRequest());
    return fetch(`${API_BASE_URL}/api/properties/${property.slug}/${property.propertyId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(property)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => {
            dispatch(savePropertySuccess())
        })
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

// ADD PROPERTY
export const ADD_PROPERTY_REQUEST = 'ADD_PROPERTY_REQUEST';
export const addPropertyRequest = () => ({
    type: ADD_PROPERTY_REQUEST
});

export const ADD_PROPERTY_SUCCESS = 'ADD_PROPERTY_SUCCESS';
export const addPropertySuccess = () => ({
    type: ADD_PROPERTY_SUCCESS
});

export const ADD_PROPERTY_ERROR = 'ADD_PROPERTY_ERROR';
export const addPropertyError = error => ({
    type: ADD_PROPERTY_ERROR,
    error
});

export const addProperty = property => dispatch => {
    dispatch(addPropertyRequest());
    return fetch(`${API_BASE_URL}/api/properties/add`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(property)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => {
            dispatch(addPropertySuccess())
        })
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};
// DELETE PROPERTY
export const DELETE_PROPERTY_REQUEST = 'DELETE_PROPERTY_REQUEST';
export const deletePropertyRequest = property => ({
    type: DELETE_PROPERTY_REQUEST,
    property
});
export const DELETE_PROPERTY_SUCCESS = 'DELETE_PROPERTY_SUCCESS';
export const deletePropertySuccess = property => ({
    type: DELETE_PROPERTY_SUCCESS,
    property
});
export const DELETE_PROPERTY_ERROR = 'DELETE_PROPERTY_ERROR';
export const deletePropertyError = error => ({
    type: DELETE_PROPERTY_ERROR,
    error
});

export const deleteProperty = (property) => dispatch => {
    dispatch(deletePropertyRequest());
    return (
        fetch(`${API_BASE_URL}/api/properties/${property.slug}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        )
            // .then(res => res.json())
            .then(() => {
                dispatch(deletePropertySuccess()
                )
            })
            .catch(error => dispatch(deletePropertyError(error)))
    )


};

// ADD IMPROVEMENT
export const ADD_IMPROVEMENT_REQUEST = 'ADD_IMPROVEMENT_REQUEST';
export const addImprovementRequest = () => ({
    type: ADD_IMPROVEMENT_REQUEST
});

export const ADD_IMPROVEMENT_SUCCESS = 'ADD_IMPROVEMENT_SUCCESS';
export const addImprovementSuccess = () => ({
    type: ADD_IMPROVEMENT_SUCCESS
});

export const ADD_IMPROVEMENT_ERROR = 'ADD_IMPROVEMENT_ERROR';
export const addImprovementError = error => ({
    type: ADD_IMPROVEMENT_ERROR,
    error
});

export const addImprovement = improvement => dispatch => {
    dispatch(addImprovementRequest());
    return fetch(`${API_BASE_URL}/api/properties/${improvement.propertyId}/add-improvement`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(improvement)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => {
            dispatch(addImprovementSuccess())
        })
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

// SAVE IMPROVEMENT
export const SAVE_IMPROVEMENT_REQUEST = 'SAVE_IMPROVEMENT_REQUEST';
export const saveImprovementRequest = improvement => ({
    type: SAVE_IMPROVEMENT_REQUEST,
    improvement
});

export const SAVE_IMPROVEMENT_SUCCESS = 'SAVE_IMPROVEMENT_SUCCESS';
export const saveImprovementSuccess = improvement => ({
    type: SAVE_IMPROVEMENT_SUCCESS,
    improvement
});

export const SAVE_IMPROVEMENT_ERROR = 'SAVE_IMPROVEMENT_ERROR';
export const saveImprovementError = improvement => ({
    type: SAVE_IMPROVEMENT_ERROR,
    improvement
});

export const saveImprovement = improvement => dispatch => {
    console.log(improvement)
    dispatch(saveImprovementRequest());
    return fetch(`${API_BASE_URL}/api/properties/${improvement.slug}/improvement/${improvement.id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(improvement)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(() => {
            dispatch(saveImprovementSuccess())
        })
        .catch(err => {
            const { reason, message, location } = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

// DELETE IMPROVEMENT
export const DELETE_IMPROVEMENT_REQUEST = 'DELETE_IMPROVEMENT_REQUEST';
export const deleteImprovementRequest = improvement => ({
    type: DELETE_IMPROVEMENT_REQUEST,
    improvement
});
export const DELETE_IMPROVEMENT_SUCCESS = 'DELETE_IMPROVEMENT_SUCCESS';
export const deleteImprovementSuccess = (improvement) => ({
    type: DELETE_IMPROVEMENT_SUCCESS,
    improvement
});
export const DELETE_IMPROVEMENT_ERROR = 'DELETE_IMPROVEMENT_ERROR';
export const deleteImprovementError = error => ({
    type: DELETE_IMPROVEMENT_ERROR,
    error
});

export const deleteImprovement = (improvement) => dispatch => {
    console.log(improvement)
    dispatch(deleteImprovementRequest());
    return (
        fetch(`${API_BASE_URL}/api/properties/${improvement.slug}/improvement/${improvement.id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        )
            //.then(res => res.json(res))
            .then(() => {
                dispatch(deleteImprovementSuccess(improvement)
                )
            })
            .catch(error => dispatch(deleteImprovementError(error)))
    )


};



// GET USER PROPERTIES
export const GET_USER_PROPERTIES_REQUEST = 'GET_USER_PROPERTIES_REQUEST';
export const getUserPropertiesRequest = () => ({
    type: GET_USER_PROPERTIES_REQUEST,
});

export const GET_USER_PROPERTIES_SUCCESS = 'GET_USER_PROPERTIES_SUCCESS';
export const getUserPropertiesSuccess = properties => ({
    type: GET_USER_PROPERTIES_SUCCESS,
    properties
});

export const GET_USER_PROPERTIES_ERROR = 'GET_USER_PROPERTIES_ERROR';
export const getUserPropertiesError = error => ({
    type: GET_USER_PROPERTIES_ERROR,
    error
});

export const getUserProperties = (user) => dispatch => {
    dispatch(getUserPropertiesRequest());
    return (
        fetch(`${API_BASE_URL}/api/properties/${user.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        )
            .then(res => res.json())
            .then(properties => {
                dispatch(getUserPropertiesSuccess(properties)
                )
            })
            .catch(error => dispatch(getUserPropertiesError(error)))
    )


};

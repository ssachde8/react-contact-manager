import React, { useReducer, createContext} from 'react';

export const ContactContext = createContext();

const initialState = {
    contacts: [],
    contact: {},    // selected or new
    message: {}, //{ type: success|fail, title: info|error, content:"lorem ipsum" }
};

function reducer(state, action) {
    switch(action.type) {
        case "FETCH_CONTACTS": {
            return {
                ...state,
                contacts: action.payload,
                contact: {},
            };
        }
        default: 
            throw new Error();
    }
};

export const ContactContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { children } = props;
    return (
        <ContactContext.Provider value={[state, dispatch]}>{children}</ContactContext.Provider>
    );
};
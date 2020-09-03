import React, { useContext, useEffect } from 'react';
import ContactList from '../components/contact-list';
import { ContactContext, ContactContextProvider } from '../context/contact-context';
import axios from 'axios';


export default function ContactListPage() {
    const [state, dispatch] = useContext(ContactContext);

    useEffect(  () => {

      const fetchData = async () => {
        const response = await axios.get('http://localhost:3030/contacts');
        dispatch({
          type:"FETCH_CONTACTS",
          payload: response.data.data ||  response.data, // incase pagination is disabled
        });
      };
      fetchData();
    }, [dispatch]);

    return (
        <div>
            <h1> List of contacts: </h1>
            <ContactList contacts={state.contacts}/>
        </div>
    );
};


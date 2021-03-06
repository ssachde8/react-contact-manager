import React from 'react';
import ContactListPage from './pages/contact-list-page';
import ContactFormPage from './pages/contact-form-page';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';



const App = () => {
  return (
    <Container>
      <div className="ui three item menu">
        <NavLink className="item" activeClassName="active" exact to="/">Contacts List</NavLink>
        <NavLink className="item" activeClassName="inactive" exact to="/contacts/new">Add Contacts</NavLink>
        <NavLink className="item" activeClassName="inactive" exact to="/contacts/edit">Edit Contacts</NavLink>
      </div>
      <Route exact path="/" component={ContactListPage} />
      <Route path="/contacts/new" component={ContactFormPage} />
      <Route path="/contacts/edit/:_id" component={ContactFormPage} />
    </Container>
    
  );
};

export default App;

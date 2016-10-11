import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
  id: 1,
  name: 'Viren',
  phone: '010 129 5555'
},
{
  id: 2,
  name: 'Choco',
  phone: '987 654 3210'
},
{
  id: 3,
  name: 'Geoff',
  phone: '999 666 3388'
},
{
  id: 4,
  name: 'Dicte',
  phone: '444 8181 2345'
}];

class App extends React.Component {
  render() {
        return (
      <div>
          <h1>Contacts List</h1>
          <ContactsList contacts={this.props.contacts} />
      </div>
    )
  }
}

ReactDOM.render(<App contacts={contacts}/>, document.getElementById('app'));

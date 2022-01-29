import { Component } from 'react';
import { Container, Title } from './App.styled';
import Filter from '../Filter';
import Form from '../Form';
import ContactList from '../ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handlerSubmitUserForm = contact => {
    this.state.contacts.some(
      contactItem =>
        contactItem.name.toLocaleLowerCase() ===
        contact.name.toLocaleLowerCase(),
    )
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
    this.resetFilter();
  };

  handlerFilterName = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterVisibleContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

  handlerDeleteContact = name => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== name.id),
    }));
  };

  resetFilter = () => {
    this.setState({ filter: '' });
  };

  render() {
    const visibleContacts = this.filterVisibleContacts();
    const { filter } = this.state;

    return (
      <Container>
        <Title>Phonebook</Title>
        <Form onSubmit={this.handlerSubmitUserForm} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.handlerFilterName} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.handlerDeleteContact}
        />
      </Container>
    );
  }
}
export default App;

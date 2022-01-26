import PropTypes from 'prop-types';
import { TiDelete } from 'react-icons/ti';

import { ContactsListBtn, ContactsListItem } from './ContactList.styled';

const ContactItem = ({ contactsItem, onDeleteContact }) =>
  contactsItem.map(contact => (
    <ContactsListItem key={contact.id}>
      {contact.name}: {contact.number}
      <ContactsListBtn onClick={() => onDeleteContact(contact.name)}>
        Delete <TiDelete />
      </ContactsListBtn>
    </ContactsListItem>
  ));

export default ContactItem;

ContactItem.propTypes = {
  contactsItem: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

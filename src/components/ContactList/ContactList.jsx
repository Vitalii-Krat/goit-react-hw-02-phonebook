import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    <ContactItem contactsItem={contacts} onDeleteContact={onDeleteContact} />
  </ul>
);

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

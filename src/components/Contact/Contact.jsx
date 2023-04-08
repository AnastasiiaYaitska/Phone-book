import PropTypes from 'prop-types';
// import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, BtnDelete } from './Contact.styled';

export const Contact = ({ name, id, phone }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>
        {name} : {phone}
      </span>
      <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </BtnDelete>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

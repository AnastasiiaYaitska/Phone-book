import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { Item, BtnDelete } from './Contact.styled';

export const Contact = ({ name, id, number }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <span>
        {name} : {number}
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
  number: PropTypes.string.isRequired,
};

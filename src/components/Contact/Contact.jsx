import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContactsIsLoading } from 'redux/contacts/selector';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import { Item, BtnDelete } from './Contact.styled';

export const Contact = ({ name, id, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectContactsIsLoading);

  return (
    <Item>
      <span>
        {name} : {phone}
      </span>
      {isLoading ? (
        <LoadingButton loading variant="outlined">
          {' '}
          Submit
        </LoadingButton>
      ) : (
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </Button>
      )}
      {/* <ButtonWrapper
        onClick={() => dispatch(deleteContact(id))}
        startIcon={<DeleteIcon />}
      >
        Delete
      </ButtonWrapper> */}
      {/* <BtnDelete type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </BtnDelete> */}
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

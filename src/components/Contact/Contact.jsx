import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectContactsIsLoading } from 'redux/contacts/selector';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingButton from '@mui/lab/LoadingButton';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import { Item, CardBox } from './Contact.styled';
import ChangeCircleOutlinedIcon from '@mui/icons-material/ChangeCircleOutlined';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//Created with material UI

export const Contact = ({ name, id, phone }) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectContactsIsLoading);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    setIsActive(true);
  };

  return (
    <Item>
      <CardBox>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {phone}
          </Typography>
        </CardContent>
        <CardActions>
          {isLoading && isActive ? (
            <LoadingButton
              loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              {' '}
              Delete
            </LoadingButton>
          ) : (
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
          )}
          <Button
            variant="outlined"
            startIcon={<ChangeCircleOutlinedIcon />}
            // startIcon={<DeleteIcon />}
            // onClick={handleDelete}
          >
            Update
          </Button>
        </CardActions>
      </CardBox>
    </Item>

    // <Item>
    //   <span>
    //     {name} : {phone}
    //   </span>
    //   {isLoading && isActive ? (
    //     <LoadingButton
    //       loading
    //       loadingPosition="start"
    //       startIcon={<SaveIcon />}
    //       variant="outlined"
    //     >
    //       {' '}
    //       Delete
    //     </LoadingButton>
    //   ) : (
    //     <Button
    //       variant="outlined"
    //       startIcon={<DeleteIcon />}
    //       onClick={handleDelete}
    //     >
    //       Delete
    //     </Button>
    //   )}
    // </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

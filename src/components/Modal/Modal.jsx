import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddContactsForm from 'components/AddContactForm/AddContactForm';
import { Backdrop } from './Modal.styled';

//Created  with Material  UI

const ModalAddContact = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen} color="primary" variant="contained">
        Add New Contact
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Backdrop>
          <AddContactsForm onClose={handleClose} />
        </Backdrop>
      </Modal>
    </>
  );
};

export default ModalAddContact;

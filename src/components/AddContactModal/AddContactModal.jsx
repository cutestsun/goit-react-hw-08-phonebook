import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import Modal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Title } from './AddContactModal.styled';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    backgroundColor: '#CFCFD1',
    boxShadow: '0px 4px 11px 0px #000',
    padding: '44px',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '32px',
  },
};

Modal.setAppElement('#modal-root');

export const AddContactModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal to add new contact"
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
    >
      <Title>Create a new contact</Title>
      <ContactsForm closeModal={closeModal} />
    </Modal>
  );
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

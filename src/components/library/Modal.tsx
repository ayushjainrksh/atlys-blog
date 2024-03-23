import './styles/modal.css';

interface IModalProps {
  children: JSX.Element
}

const Modal = ({ children }: IModalProps): JSX.Element => {
  return (
    <div className='modal'>
      <div>
        Modal
      </div>
      {children}
    </div>
  );
};

export default Modal;

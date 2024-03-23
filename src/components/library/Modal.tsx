import './styles/modal.scss';

interface IModalProps {
  children: JSX.Element
  showCloseButton?: boolean
}

const Modal = ({ children }: IModalProps): JSX.Element => {
  return (
    <div className='modal'>
      <div className='modal__content'>
        {children}
      </div>
    </div>
  );
};

export default Modal;

import './styles/modal.scss';
import close from '../../assets/images/close.svg';
import { useNavigate } from 'react-router-dom';

interface IModalProps {
  children: JSX.Element
  showCloseButton?: boolean
}

const Modal = ({ children }: IModalProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className='modal'>
      <div className='modal__content'>
        <div className='modal__content__close'>
          <img src={close} onClick={() => { navigate(-1); }} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

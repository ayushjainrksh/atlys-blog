import './styles/modal.scss';
import close from '../../assets/images/close.svg';
import { Link, useLocation } from 'react-router-dom';

interface IModalProps {
  children: JSX.Element
  showCloseButton?: boolean
}

const Modal = ({ children }: IModalProps): JSX.Element => {
  const location = useLocation();

  return (
    <div className='modal'>
      <div className='modal__content'>
        <div className='modal__content__close'>
          <Link to={location.state?.previousLocation}>
            <img src={close} />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;

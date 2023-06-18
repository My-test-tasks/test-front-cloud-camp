import Button, { ButtonVariant } from '@components/Button';
import { FC, useRef, useEffect } from 'react';
import loadingIcon from '@assets/icons/loading.svg';
import successIcon from '@assets/icons/success.svg';
import errorIcon from '@assets/icons/error.svg';
import closeIcon from '@assets/icons/close.svg';
import styles from './Modal.module.scss';
import { useAppDispatch } from '@store/hooks';
import { setStep } from '@store/form/formSlice';
import { StepNumber } from '@store/form/types';

export enum ModalVariant {
  loading = 'loading',
  success = 'success',
  error = 'error',
}

type ModalProps = {
  variant: ModalVariant;
};

const Modal: FC<ModalProps> = ({ variant }) => {
  const ref = useRef<HTMLDialogElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    ref.current?.close();
    ref.current?.showModal();
  }, []);

  const closeBtnHandler = () => {
    dispatch(setStep(StepNumber.three));
    ref.current?.close();
  };

  const toMainBtnHandler = () => {
    dispatch(setStep(StepNumber.zero));
    ref.current?.close();
  };

  return (
    <dialog className={styles.modal} ref={ref}>
      {variant === ModalVariant.loading && <h2></h2>}
      {variant === ModalVariant.success && <h2 className={styles.title}>Форма успешно отправлена</h2>}
      {variant === ModalVariant.error && (
        <div className={`${styles.header} ${styles.error}`}>
          <div className={styles.title}>Ошибка</div>
          <button className={styles.exit} onClick={closeBtnHandler}>
            <img src={closeIcon} alt='close' />
          </button>
        </div>
      )}

      {variant === ModalVariant.loading && (
        <div className={`${styles.icon} ${styles.loading}`}>
          <img src={loadingIcon} alt='loading' />
        </div>
      )}
      {variant === ModalVariant.success && (
        <div className={`${styles.icon} ${styles.success}`}>
          <img src={successIcon} alt='success' />
        </div>
      )}
      {variant === ModalVariant.error && (
        <div className={`${styles.icon} ${styles.error}`}>
          <img src={errorIcon} alt='error' />
        </div>
      )}

      {variant === ModalVariant.loading && <span></span>}
      {variant === ModalVariant.success && (
        <Button variant={ButtonVariant.primary} onClick={toMainBtnHandler} id='button-to-main'>
          На главную
        </Button>
      )}
      {variant === ModalVariant.error && (
        <Button variant={ButtonVariant.primary} className={styles.close} onClick={closeBtnHandler} id='button-close'>
          Закрыть
        </Button>
      )}
    </dialog>
  );
};

export default Modal;

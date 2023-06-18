import { useAppSelector } from '@store/hooks';
import { useEffect } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { StepNumber } from '@store/form/types';
import { Navigate } from 'react-router-dom';
import ROUTES from '@configs/routes';
import { useSendFormMutation } from '@store/form/formAPI';
import Modal, { ModalVariant } from '@components/Modal';

const CreateForm = () => {
  const { step, step1, step2, step3, sending } = useAppSelector((state) => state.form);

  const [sendForm, { isSuccess, isLoading, isError }] = useSendFormMutation();

  useEffect(() => {
    if (sending) {
      const formData = {
        ...step1,
        ...step2,
        ...step3,
      };

      sendForm(formData);
    }
  }, [step1, step2, step3, sending, sendForm]);

  return (
    <>
      {step === StepNumber.zero && <Navigate to={ROUTES.main} />}
      {step === StepNumber.one && <Step1 />}
      {step === StepNumber.two && <Step2 />}
      {step === StepNumber.three && <Step3 />}

      {isLoading && sending && <Modal variant={ModalVariant.loading} />}
      {isSuccess && sending && <Modal variant={ModalVariant.success} />}
      {isError && sending && <Modal variant={ModalVariant.error} />}
    </>
  );
};

export default CreateForm;

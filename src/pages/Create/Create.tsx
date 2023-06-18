import { StepNumber } from '@store/form/types';
import styles from './Create.module.scss';
import Form from './Form';
import Stepper from './Stepper';

const Create = () => {
  const steps = [StepNumber.one, StepNumber.two, StepNumber.three];

  return (
    <div className={styles.page}>
      <Stepper steps={steps} />

      <Form />
    </div>
  );
};

export default Create;

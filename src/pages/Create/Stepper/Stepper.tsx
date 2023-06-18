import styles from './Stepper.module.scss';
import { StepNumber } from '@store/form/types';
import { useAppSelector } from '@store/hooks';
import classNames from 'classnames';
import { FC } from 'react';
import activeIcon from '@assets/icons/active.svg';
import checkedIcon from '@assets/icons/checked.svg';

type StepperProps = {
  steps: Omit<StepNumber, StepNumber.zero | StepNumber.send>[];
};

const Stepper: FC<StepperProps> = ({ steps }) => {
  const { step: currentStep } = useAppSelector((state) => state.form);

  if (currentStep === StepNumber.zero) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.circles}>
        {steps.map((step) => {
          const circleStyles = classNames({
            [styles.circle]: true,
            [styles.checked]: +step < +currentStep,
            [styles.active]: step === currentStep,
          });

          return <div key={step.toString()} className={circleStyles}></div>;
        })}
      </div>

      <div className={styles.icons}>
        {steps.map((step) => {
          if (+step < +currentStep) {
            return (
              <div key={step.toString()} className={styles.icon}>
                <img src={checkedIcon} alt='checked' />
              </div>
            );
          }
          if (step === currentStep) {
            return (
              <div key={step.toString()} className={styles.icon}>
                <img src={activeIcon} alt='active' />
              </div>
            );
          }
          return <div key={step.toString()} className={styles.icon}></div>;
        })}
      </div>

      <div className={styles.lines}>
        {steps.map((step, index) => {
          const lineStyles = classNames({
            [styles.line]: true,
            [styles.checked]: +step < +currentStep,
          });

          if (index === steps.length - 1) {
            return null;
          }

          return <div key={step.toString()} className={lineStyles}></div>;
        })}
      </div>

      <div className={styles.numbers}>
        {steps.map((step, index) => {
          const className = classNames({
            [styles.number]: true,
            [styles.disabled]: +step > +currentStep,
          });

          return (
            <div key={step.toString()} className={className}>
              {index + 1}
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Stepper;

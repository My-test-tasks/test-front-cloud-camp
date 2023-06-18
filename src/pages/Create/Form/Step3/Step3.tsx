import Button, { ButtonVariant } from '@components/Button';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './Step3.module.scss';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setStep, setStep3 } from '@store/form/formSlice';
import { IStep3, StepNumber } from '@store/form/types';

const Step3 = () => {
  const validationsSchema = Yup.object().shape({
    about: Yup.string().max(200, 'Максимум 200 символов').typeError('Должно быть строкой').required('Обязательно'),
  });

  const { about } = useAppSelector((state) => state.form.step3);
  const dispatch = useAppDispatch();

  const nextHandle = (values: IStep3) => {
    dispatch(setStep3(values));
    dispatch(setStep(StepNumber.send));
  };

  const backHandle = (values: IStep3) => {
    dispatch(setStep3(values));
    dispatch(setStep(StepNumber.two));
  };

  return (
    <Formik
      initialValues={{
        about,
      }}
      validateOnBlur
      onSubmit={nextHandle}
      validationSchema={validationsSchema}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <>
          <div className={styles.step}>
            <div className={styles.about}>
              <label htmlFor='about'>About</label>

              <textarea
                className={styles.textarea}
                name='about'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.about}
              ></textarea>

              <span className={styles.counter}>{values.about.split('').filter((ch) => ch !== ' ').length}</span>

              {touched.about && errors.about && <p className={styles.error}>{errors.about}</p>}
            </div>
          </div>
          <div className={styles.buttons}>
            <Button variant={ButtonVariant.secondary} onClick={() => backHandle(values)} id='button-back'>
              Назад
            </Button>

            <Button variant={ButtonVariant.primary} onClick={() => handleSubmit()} type='submit' id='button-next'>
              Отправить
            </Button>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Step3;

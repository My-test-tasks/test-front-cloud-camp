import { Fragment } from 'react';
import Button, { ButtonVariant } from '@components/Button';
import { Field, FieldArray, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './Step2.module.scss';
import { IStep2, StepNumber } from '@store/form/types';
import { setStep, setStep2 } from '@store/form/formSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import InputText from '@components/InputText';
import trashIcon from '@assets/icons/trash.svg';

const Step2 = () => {
  const validationsSchema = Yup.object().shape({
    advantages: Yup.array()
      .of(Yup.string().min(1, 'Не должно быть пустым').required('Не должно быть пустым'))
      .min(1, 'Добавь минимум 1 преимущество')
      .required('Обязательно'),
    radioGroup: Yup.number().min(1, 'Выбери радио').typeError('Выбери радио').required('Обязательно'),
    checkboxGroup: Yup.array().min(1, 'Выбери минимум 1 чекбокс').required('Обязательно'),
  });

  const { advantages, radioGroup, checkboxGroup } = useAppSelector((state) => state.form.step2);
  const dispatch = useAppDispatch();

  const nextHandle = (values: IStep2) => {
    dispatch(setStep2(values));
    dispatch(setStep(StepNumber.three));
  };

  const backHandle = (values: IStep2) => {
    dispatch(setStep2(values));
    dispatch(setStep(StepNumber.one));
  };

  return (
    <Formik
      initialValues={{
        advantages,
        radioGroup,
        checkboxGroup,
      }}
      validateOnBlur
      onSubmit={nextHandle}
      validationSchema={validationsSchema}
    >
      {({ values, errors, handleChange, handleSubmit, touched }) => (
        <>
          <div className={styles.step}>
            <FieldArray name='advantages'>
              {({ remove, push }) => (
                <div className={styles.advantages}>
                  <p className={styles.title}>Advantages</p>
                  {values.advantages.map((_, index) => (
                    <Fragment key={`row-${index}`}>
                      <div key={`row-${index}`} className={styles.row}>
                        <Field name={`advantages.${index}`} component={InputText} placeholder='Placeholder' />

                        <button onClick={() => remove(index)} title='Delete'>
                          <img src={trashIcon} alt='Delete' />
                        </button>
                      </div>
                      <p key={`error-${index}`} className={styles.error}>
                        {errors?.advantages?.[index]}
                      </p>
                    </Fragment>
                  ))}
                  <Button variant={ButtonVariant.secondary} onClick={() => push('')}>
                    +
                  </Button>
                </div>
              )}
            </FieldArray>
            {!values.advantages.length && <p className={styles.error}>{errors.advantages}</p>}

            <div className={styles.checkboxes}>
              <p className={styles.title}>Checkbox group</p>
              <label className={styles.row}>
                <input
                  name='checkboxGroup'
                  type='checkbox'
                  value='1'
                  id='s1'
                  className={styles.checkbox}
                  onChange={handleChange}
                  defaultChecked={values.checkboxGroup.includes('1')}
                />
                1
              </label>

              <label className={styles.row}>
                <input
                  name='checkboxGroup'
                  type='checkbox'
                  value='2'
                  id='s2'
                  className={styles.checkbox}
                  onChange={handleChange}
                  defaultChecked={values.checkboxGroup.includes('2')}
                />
                2
              </label>
              <label className={styles.row}>
                <input
                  name='checkboxGroup'
                  type='checkbox'
                  value='3'
                  id='s3'
                  className={styles.checkbox}
                  onChange={handleChange}
                  defaultChecked={values.checkboxGroup.includes('3')}
                />
                3
              </label>
              {touched.checkboxGroup && errors.checkboxGroup && <p className={styles.error}>{errors.checkboxGroup}</p>}
            </div>

            <div className={styles.radios}>
              <p className={styles.title}> Radio group</p>
              <label className={styles.row}>
                <input
                  name='radioGroup'
                  type='radio'
                  value='1'
                  className={styles.radio}
                  onChange={handleChange}
                  defaultChecked={values.radioGroup == 1}
                />
                1
              </label>
              <label className={styles.row}>
                <input
                  name='radioGroup'
                  type='radio'
                  value='2'
                  className={styles.radio}
                  onChange={handleChange}
                  defaultChecked={values.radioGroup == 2}
                />
                2
              </label>
              <label className={styles.row}>
                <input
                  name='radioGroup'
                  type='radio'
                  value='3'
                  className={styles.radio}
                  onChange={handleChange}
                  defaultChecked={values.radioGroup == 3}
                />
                3
              </label>
              {touched.radioGroup && errors.radioGroup && <p className={styles.error}>{errors.radioGroup}</p>}
            </div>
          </div>
          <div className={styles.buttons}>
            <Button variant={ButtonVariant.secondary} onClick={() => backHandle(values)} id='button-back'>
              Назад
            </Button>

            <Button variant={ButtonVariant.primary} onClick={() => handleSubmit()} type='submit' id='button-next'>
              Далее
            </Button>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Step2;

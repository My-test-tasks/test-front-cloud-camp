import Button, { ButtonVariant } from '@components/Button';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setStep, setStep1 } from '@store/form/formSlice';
import { IStep1, Sex, StepNumber } from '@store/form/types';
import styles from './Step1.module.scss';
import InputText from '@components/InputText';
import InputSelect from '@components/InputSelect';

const Step1 = () => {
  const validationsSchema = Yup.object().shape({
    nickname: Yup.string().typeError('Должно быть строкой').required('Обязательно'),
    name: Yup.string().typeError('Должно быть строкой').required('Обязательно'),
    surname: Yup.string().typeError('Должно быть строкой').required('Обязательно'),
    sex: Yup.mixed<Sex>().oneOf(Object.values(Sex), "Выберите 'man' или 'woman'").required('Обязательно'),
  });

  const { nickname, name, surname, sex } = useAppSelector((state) => state.form.step1);
  const dispatch = useAppDispatch();

  const nextHandle = (values: IStep1) => {
    dispatch(setStep1(values));
    dispatch(setStep(StepNumber.two));
  };

  const backHandle = (values: IStep1) => {
    dispatch(setStep1(values));
    dispatch(setStep(StepNumber.zero));
  };

  return (
    <Formik
      initialValues={{
        nickname,
        name,
        surname,
        sex,
      }}
      validateOnBlur
      onSubmit={nextHandle}
      validationSchema={validationsSchema}
    >
      {(props) => (
        <>
          <div className={styles.step}>
            <Field
              name='nickname'
              component={InputText}
              title='Nickname'
              tip=' '
              placeholder='Placeholder'
              id='field-nickname'
            />

            <Field name='name' component={InputText} title='Name' tip=' ' placeholder='Placeholder' id='field-name' />

            <Field
              name='surname'
              component={InputText}
              title='Surname'
              tip=' '
              placeholder='Placeholder'
              id='field-surname'
            />

            <Field name='sex' component={InputSelect} title='Sex' tip=' ' id='field-sex' />
          </div>

          <div className={styles.buttons}>
            <Button variant={ButtonVariant.secondary} onClick={() => backHandle(props.values)} id='button-back'>
              Назад
            </Button>

            <Button variant={ButtonVariant.primary} onClick={() => props.handleSubmit()} type='submit' id='button-next'>
              Далее
            </Button>
          </div>
        </>
      )}
    </Formik>
  );
};

export default Step1;

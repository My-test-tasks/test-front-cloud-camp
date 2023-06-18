import Button, { ButtonVariant } from '@components/Button';
import Header from './Header';
import { ISocial } from './Header';
import styles from './Main.module.scss';
import ROUTES from '@configs/routes';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@store/hooks';
import { setStep } from '@store/form/formSlice';
import { StepNumber } from '@store/form/types';
import InputPhone from '@components/InputPhone';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import InputEmail from '@components/InputEmail';

const firstName = 'Игорь';
const lastName = 'Асессоров';
const socials: ISocial[] = [
  { name: 'Telegram', link: 'https://t.me/Bumble_sakh' },
  { name: 'GitHub', link: 'https://github.com/Bumble-sakh' },
  { name: 'Resume', link: 'https://hh.ru/resume/c2757857ff0b8e604f0039ed1f794a496d6c78' },
];
const phone = '+7(924)281-25-65';
const email = 'igor.asessorov@gmail.com';

const headerProps = {
  firstName,
  lastName,
  socials,
};

const Main = () => {
  const phoneRegExp = /\+7\(\d\d\d\)\d\d\d-\d\d-\d\d/;

  const validationsSchema = Yup.object().shape({
    phone: Yup.string()
      .matches(phoneRegExp, 'Полностью введите номер')
      .typeError('Должно быть строкой')
      .required('Обязательно'),
    email: Yup.string().email('Должен быть email').typeError('Должно быть строкой').required('Обязательно'),
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const startHandler = (isValid: boolean) => {
    if (isValid) {
      dispatch(setStep(StepNumber.one));
      navigate(ROUTES.create);
    }
  };

  return (
    <div className={styles.page}>
      <Header {...headerProps} />

      <Formik
        initialValues={{
          phone,
          email,
        }}
        validateOnMount
        onSubmit={() => console.log()}
        validationSchema={validationsSchema}
      >
        {(props) => (
          <>
            <div className={styles.info}>
              <Field name='phone' component={InputPhone} value={phone} disabled />
              <Field name='email' component={InputEmail} disabled />
            </div>

            <Button
              variant={ButtonVariant.primary}
              onClick={() => startHandler(props.isValid)}
              id='button-start'
              type='submit'
            >
              Начать
            </Button>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Main;

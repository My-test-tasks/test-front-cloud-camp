import { FC } from 'react';
import { FieldInputProps, FormikState } from 'formik';
import styles from './InputEmail.module.scss';

type InputEmailProps = {
  field: FieldInputProps<any>; // eslint-disable-line
  form: FormikState<any>; // eslint-disable-line
  disabled?: boolean;
};

const InputEmail: FC<InputEmailProps> = ({ field, form: { errors }, disabled }) => {
  return (
    <div className={styles.row}>
      <label htmlFor={field.name}>Email</label>
      <input className={styles.input} type='email' id={field.name} {...field} disabled={disabled} />
      {errors[field.name] && <p className={styles.error}>{errors[field.name]?.toString()}</p>}
    </div>
  );
};

export default InputEmail;

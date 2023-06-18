import { FC } from 'react';
import { FieldInputProps, FormikState } from 'formik';
import styles from './InputText.module.scss';

type InputTextProps = {
  field: FieldInputProps<any>; // eslint-disable-line
  form: FormikState<any>; // eslint-disable-line
  title: string;
  tip?: string;
  placeholder?: string;
  id?: string;
};

const InputText: FC<InputTextProps> = ({ field, form: { touched, errors }, title, tip, placeholder, id }) => {
  return (
    <div className={styles.row}>
      {title && <label htmlFor={field.name}>{title}</label>}
      <input className={styles.input} type='text' {...field} placeholder={placeholder} id={id} />
      {tip && <p className={styles.tip}>{`Tip ${tip}`}</p>}
      {touched[field.name] && errors[field.name] && <p className={styles.error}>{errors[field.name]?.toString()}</p>}
    </div>
  );
};

export default InputText;

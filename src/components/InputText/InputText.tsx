import { FC } from 'react';
import { FieldInputProps, FormikState } from 'formik';
import styles from './InputText.module.scss';

type InputTextProps = {
  field: FieldInputProps<any>;
  form: FormikState<any>;
  title: string;
  tip?: string;
  placeholder?: string;
};

const InputText: FC<InputTextProps> = ({ field, form: { touched, errors }, title, tip, placeholder }) => {
  return (
    <div className={styles.row}>
      {title && <label htmlFor={field.name}>{title}</label>}
      <input className={styles.input} type='text' {...field} placeholder={placeholder} />
      {tip && <p className={styles.tip}>{`Tip ${tip}`}</p>}
      {touched[field.name] && errors[field.name] && <p className={styles.error}>{errors[field.name]?.toString()}</p>}
    </div>
  );
};

export default InputText;

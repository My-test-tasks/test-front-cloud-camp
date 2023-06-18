import { FC } from 'react';
import styles from './InputSelect.module.scss';
import { FieldInputProps, FormikState } from 'formik';
import { Sex } from '@store/form/types';

type InputSelectProps = {
  field: FieldInputProps<any>;
  form: FormikState<any>;
  title: string;
  tip?: string;
};

const InputSelect: FC<InputSelectProps> = ({ field, form: { touched, errors }, title, tip }) => {
  return (
    <div className={styles.row}>
      <label htmlFor={field.name}>{title}</label>
      <select className={styles.select} {...field}>
        <option value={0} disabled hidden>
          Не выбранно
        </option>
        <option value={Sex.man}>{Sex.man}</option>
        <option value={Sex.woman}>{Sex.woman}</option>
      </select>
      {tip && <p className={styles.tip}>{`Tip ${tip}`}</p>}
      {touched[field.name] && errors[field.name] && <p className={styles.error}>{errors[field.name]?.toString()}</p>}
    </div>
  );
};

export default InputSelect;

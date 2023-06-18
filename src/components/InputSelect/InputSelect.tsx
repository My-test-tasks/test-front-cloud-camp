import { FC } from 'react';
import styles from './InputSelect.module.scss';
import { FieldInputProps, FormikState } from 'formik';
import { Sex } from '@store/form/types';

type InputSelectProps = {
  field: FieldInputProps<any>; // eslint-disable-line
  form: FormikState<any>; // eslint-disable-line
  title: string;
  tip?: string;
  id?: string;
};

const InputSelect: FC<InputSelectProps> = ({ field, form: { touched, errors }, title, tip, id }) => {
  return (
    <div className={styles.row}>
      <label htmlFor={field.name}>{title}</label>
      <select className={styles.select} {...field} id={id}>
        <option value={0} disabled hidden>
          Не выбранно
        </option>
        <option value={Sex.man} id='field-sex-option-man'>
          {Sex.man}
        </option>
        <option value={Sex.woman} id='field-sex-option-woman'>
          {Sex.woman}
        </option>
      </select>
      {tip && <p className={styles.tip}>{`Tip ${tip}`}</p>}
      {touched[field.name] && errors[field.name] && <p className={styles.error}>{errors[field.name]?.toString()}</p>}
    </div>
  );
};

export default InputSelect;

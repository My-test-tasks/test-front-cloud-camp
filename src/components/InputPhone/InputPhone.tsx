import { FC } from 'react';
import { FieldInputProps, FormikState } from 'formik';
import styles from './InputPhone.module.scss';

const setCursorPosition = (pos: number, e: HTMLInputElement) => {
  e.focus();
  if (e.setSelectionRange) {
    e.setSelectionRange(pos, pos);
  }
};

const mask = (e: React.ChangeEvent<HTMLInputElement>) => {
  const target = e.currentTarget;
  let matrix = target.placeholder;
  let pos = 0;
  const def = matrix.replace(/\D/g, '');
  let val = target.value.replace(/\D/g, '');
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, () => {
    return val.charAt(pos++) || '_';
  });
  target.value = matrix;
  pos = matrix.lastIndexOf(val.substr(-1));
  pos < matrix.length && matrix != target.placeholder ? pos++ : (pos = matrix.indexOf('_'));
  setCursorPosition(pos, target);
};

type InputPhoneProps = {
  field: FieldInputProps<any>; // eslint-disable-line
  form: FormikState<any>; // eslint-disable-line
  disabled: boolean;
};

const InputPhone: FC<InputPhoneProps> = ({ field, form: { errors }, disabled }) => {
  return (
    <div className={styles.row}>
      <label htmlFor={field.name}>Номер телефона</label>
      <input
        className={styles.input}
        type='tel'
        id={field.name}
        {...field}
        pattern='\+7\(\d\d\d\)\d\d\d-\d\d-\d\d'
        placeholder='+7(___)___-__-__'
        onInput={mask}
        disabled={disabled}
      />
      {errors[field.name] && <p className={styles.error}>{errors[field.name]?.toString()}</p>}
    </div>
  );
};

export default InputPhone;

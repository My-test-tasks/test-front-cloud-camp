import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
}

type ButtonProps = PropsWithChildren<{
  variant: ButtonVariant;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ variant, children, ...attributes }) => {
  attributes.className = classNames(attributes.className, {
    [styles.button]: true,
    [styles.primary]: variant === ButtonVariant.primary,
    [styles.secondary]: variant === ButtonVariant.secondary,
  });

  return <button {...attributes}>{children}</button>;
};

export default Button;

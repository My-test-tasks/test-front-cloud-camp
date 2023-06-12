import { FC } from 'react';
import styles from './Header.module.scss';
import Social from '../Social';

export interface ISocial {
  name: string;
  link: string;
}

type HeaderProps = {
  firstName: string;
  lastName: string;
  socials: ISocial[];
};

const Header: FC<HeaderProps> = ({ firstName, lastName, socials }) => {
  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <header className={styles.header}>
      <div className={styles.avatar}>
        <span> {initials}</span>
      </div>
      <div className={styles.info}>
        <div className={styles.name}>{`${firstName} ${lastName}`}</div>
        <div className={styles.socials}>
          {socials.map((social) => (
            <Social key={social.name} social={social} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;

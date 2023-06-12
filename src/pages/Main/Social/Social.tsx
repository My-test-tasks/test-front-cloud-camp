import { FC } from 'react';
import { ISocial } from '../Header/Header';
import folderIcon from '@assets/icons/folder.svg';
import styles from './Social.module.scss';

type SocialProps = {
  social: ISocial;
};

const Social: FC<SocialProps> = ({ social }) => {
  return (
    <a href={social.link} className={styles.link}>
      <img src={folderIcon} alt='icon' />
      <span>{social.name}</span>
    </a>
  );
};

export default Social;

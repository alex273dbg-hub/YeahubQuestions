import React from 'react';
import styles from './ButtonFilter.module.css';

interface ButtonFilterProps {
  children: React.ReactNode;
  onClick: () => void;
  imgSrc?: string;
  isActive?: boolean;
}

const ButtonFilter = ({ children, onClick, imgSrc, isActive }: ButtonFilterProps) => {
  return (
    <button onClick={onClick} className={`${styles.buttonFilter} ${isActive ? styles.active : ''}`}>
      {imgSrc && <img src={imgSrc} alt="img" />}
      {children}
    </button>
  );
};

export default ButtonFilter;

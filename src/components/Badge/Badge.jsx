import React from 'react';
import styles from './Badge.module.css';

export default function Badge({ children, variant = 'default' }) {
  const variantClass = styles[variant] || styles.default;
  return <span className={`${styles.badge} ${variantClass}`}>{children}</span>;
}

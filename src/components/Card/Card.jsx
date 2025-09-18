import React from 'react';
import styles from './Card.module.css';

export default function Card({ title, location, score, badges, children, footer }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>{title}</div>
      <p className={styles.location}>Location: {location}</p>
      <p className={styles.score}>Score: {score}</p>

      {/* ✅ Updated badges section */}
      <div className={styles.badges}>
        {badges.map((badge, index) => {
          let icon;
          if (badge.type === 'residential') icon = <i className="fa-regular fa-house"></i>;
          if (badge.type === 'investment') icon = <i className="fa-regular fa-star"></i>;
          if (badge.type === 'guestHouse') icon = <i className="fas fa-mountain"></i>;

          return (
            <span key={index} className={`${styles.badge} ${styles[badge.type]}`}>
              {icon} {badge.label}
            </span>
          );
        })}
      </div>

      <div className={styles.actions}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

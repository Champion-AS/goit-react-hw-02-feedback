import React from 'react';
import s from './Messadge.modal.css';

export const Messadge = ({ title, children }) => {
  return (
    <section className={s.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
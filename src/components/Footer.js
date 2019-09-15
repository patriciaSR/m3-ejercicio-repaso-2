import React from 'react';
import Clock from './Clock';

const Footer = (props) => (
  <footer className="page__footer">
    <span className="footer__copy">loh</span>
    <span className="footer__date">{props.date}</span>
    <Clock />
  </footer>
);

export default Footer;

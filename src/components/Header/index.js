import './header.styl'

import React, { Component } from 'react';

import Logo from '../Logo';
import Phone from '../Phone';

export default function Header() {
  return (
    <div className="header">
      <Logo/>
      <Phone/>
    </div>
  );
}

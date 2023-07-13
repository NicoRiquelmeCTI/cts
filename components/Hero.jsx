import React from 'react';

import Logo from './Logo';

const Hero = () => (
  <div className="hero my-5 text-center" data-testid="hero">
    <Logo testId="hero-logo" />
    <h1 className="mb-4" data-testid="hero-title">
      Computational Thinking Studies
    </h1>

    <p className="lead" data-testid="hero-lead">
      Esta es un prototipo de aplicación web para el estudio del pensamiento computacional en relación con otras habilidades del S21. 
    
    </p>
  </div>
);

export default Hero;

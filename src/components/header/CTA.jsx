import React from 'react';
import CV from '../../assets/resume.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
///////////////////////////////https://github.com/ryanbalieiro/react-portfolio-template////////////template link///https://github.com/mittal-parth/personal-portfolio////////////
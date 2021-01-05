import React from 'react';
import '../styles/Greetings.css';

// This could come from a configuration file, that's why I didn't put it inside
// the component.
const langs = {
  de: 'Guten tag mein freund',
  en: 'Hello',
  fr: 'Bonjour',
  es: 'Ola',
};

function Greetings({ lang, children }) {
  return (
    <div className="Greetings">
      {langs[lang]} {children}
    </div>
  );
}

export default Greetings;

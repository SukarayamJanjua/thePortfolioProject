import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const text = texts[currentTextIndex];

    if (!isDeleting && currentText === text) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((current) => (current + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(text.substring(0, isDeleting ? currentText.length - 1 : currentText.length + 1));
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts]);

  return (
    <span className="inline-block min-w-[20ch]">
      {currentText}<span className="animate-pulse">_</span>
    </span>
  );
};

export default TypewriterEffect;
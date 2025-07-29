import React, { useEffect, useState } from 'react';

const TypewriterText = ({ text = "", speed = 40, onComplete = () => {}, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      onComplete(); // Done typing
    }
  }, [index, text, speed, onComplete]);

  return <p className={className}>{displayedText}</p>;
};

export default TypewriterText;

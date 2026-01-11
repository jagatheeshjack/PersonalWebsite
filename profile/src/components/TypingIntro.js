import React, { useState, useEffect } from "react";

const roles = [
  "Developer",
  "Engineer",
  "Reader - Quick Learner.",
  "Photographer",
  "Traveller",
  "wheelers",
  "ecofreak"
];

function TypingIntro() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let erasingTimeout;
    const fullText = roles[currentRole];

    if (typing) {
      if (displayText.length < fullText.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (displayText.length > 0) {
        erasingTimeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setTyping(true);
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }
    }
    return () => {
      clearTimeout(typingTimeout);
      clearTimeout(erasingTimeout);
    };
  }, [displayText, typing, currentRole]);

  return (
    <p className="subtitle" style={{ fontSize: '2rem', color: 'midnightblue', marginTop: '1rem', position: 'relative', display: 'inline-block' }}>
      I'm {displayText}
      <span style={{ borderBottom: '3px solid #29b6f6', display: 'block', width: displayText.length ? '100%' : 0, transition: 'width 0.2s', height: 0, marginTop: 2 }}></span>
    </p>
  );
}

export default TypingIntro;

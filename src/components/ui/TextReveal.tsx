import React from 'react';

interface TextRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  stagger = 0.03 // Default stagger between chars
}) => {
  const text = typeof children === 'string' ? children : '';
  
  // If not string, return as is (fallback)
  if (!text) return <span className={className}>{children}</span>;

  // Split by words to preserve spacing, then by characters
  const words = text.split(" ");

  return (
    <span className={`inline-block ${className}`}>
      {words.map((word, wordIndex) => {
        // Calculate cumulative index for global stagger effect
        const previousChars = words.slice(0, wordIndex).join("").length;
        
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {word.split("").map((char, charIndex) => (
               <span
                  key={charIndex}
                  className="inline-block opacity-0 filter blur-[10px] animate-blur-reveal"
                  style={{ 
                    animationDelay: `${delay + (previousChars + charIndex) * (stagger * 1000)}ms` 
                  }}
               >
                {char}
               </span>
            ))}
          </span>
        );
      })}
    </span>
  );
};

export default TextReveal;
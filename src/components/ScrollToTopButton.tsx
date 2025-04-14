import React from 'react';
import { useScrollToTop } from '../hooks/useScrollToTop';

interface ScrollToTopButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollToTopButton: React.FC<ScrollToTopButtonProps> = ({ 
  to, 
  children, 
  className = '', 
  ...props 
}) => {
  const handleNavigation = useScrollToTop();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (props.onClick) {
      props.onClick(e);
    }
    handleNavigation(to);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default ScrollToTopButton; 
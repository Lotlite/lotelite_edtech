import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useScrollToTop = () => {
  const navigate = useNavigate();

  const handleNavigation = useCallback((to: string) => {
    navigate(to);
    window.scrollTo(0, 0);
  }, [navigate]);

  return handleNavigation;
}; 
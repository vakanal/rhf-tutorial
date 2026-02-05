import { useEffect, useRef } from 'react';

interface UseFocusManagementProps {
  shouldFocus: boolean;
  focusElement?: HTMLElement | null;
}

export const useFocusManagement = ({ shouldFocus, focusElement }: UseFocusManagementProps) => {
  const focusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (shouldFocus) {
      const elementToFocus = focusElement || focusRef.current;
      if (elementToFocus) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          elementToFocus.focus();
        }, 100);
      }
    }
  }, [shouldFocus, focusElement]);

  const focusFirstError = () => {
    const firstErrorElement = document.querySelector('[aria-invalid="true"]') as HTMLElement;
    if (firstErrorElement) {
      firstErrorElement.focus();
      return true;
    }
    return false;
  };

  const focusFirstInput = () => {
    const firstInputElement = document.querySelector('input, select, textarea, button') as HTMLElement;
    if (firstInputElement) {
      firstInputElement.focus();
      return true;
    }
    return false;
  };

  return {
    focusRef,
    focusFirstError,
    focusFirstInput,
  };
};
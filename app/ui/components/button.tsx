import React from "react";
import styles from './button.module.css';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  useSuspense?: boolean;
  suspenseTimeoutSeconds?: number;
}
/**
 * Create a standard button component with optional suspense. The suspense option will simulate a loading state for the button and will timeout after a specified number of seconds. If no `suspenseTimeoutSeconds` is provided, the default is 5 seconds.
 * 
 * @param onClick The function that will be called when the button is clicked
 * @param useSuspense If true, the button will use suspense to simulate a loading state
 * @param suspenseTimeoutSeconds The number of seconds to wait before resolving the promise
 * @param children The content of the button
 * @returns 
 */
const Button = ({
  children,
  className = '',
  onClick,
  useSuspense = false,
  suspenseTimeoutSeconds = 5,
}: ButtonProps) => {

  const handleClick = () => {
    if (useSuspense) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(onClick());
        }, suspenseTimeoutSeconds * 1000);
      }).catch((e: Error) => {
        console.log('Error', e);
      });
    }
    return onClick();
  }

  return (
    <button onClick={handleClick} className={`${styles.button} ${className}`}>
      {children}
    </button>
  )
}

export default Button;
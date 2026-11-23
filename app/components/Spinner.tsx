import React from 'react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-4',
    lg: 'h-16 w-16 border-4',
  };

  return (
    
    <div role="status" className={`items-center justify-center align-center ${className}`}>
      <div
        className={`${sizeClasses[size]} animate-spin rounded-full border-rose-500 border-t-transparent`}
      />
      <div className="text-banana mt-6">Loading....</div>
    </div>
  );
};

export default Spinner;


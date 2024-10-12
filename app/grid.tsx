import React from 'react';

export const grid = 'grid grid-cols-12 gap-4 min-w-[100vw]';

export const Grid = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${grid} ${className}`}>{children}</div>;
};

'use client';

import { FunctionComponent, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;

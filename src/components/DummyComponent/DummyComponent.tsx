import React from 'react';

// Styles
import './DummyComponent.css';

interface DummyComponentProps {
  className?: string;
  title: string;
}

const DummyComponent = ({
  children,
  className,
  title,
}: React.PropsWithChildren<DummyComponentProps>) => {
  return (
    <div className={`DummyComponent ${className}`}>
      <div className={`DummyComponent__Title`}>{title}</div>
      {children}
    </div>
  );
}

export default React.memo(DummyComponent);

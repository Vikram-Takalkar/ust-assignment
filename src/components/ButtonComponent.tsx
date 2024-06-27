import React from 'react';

interface ButtonComponentProps {
  count: {
    acceptable?: number;
    monitor?: number;
    danger?: number;
    alarm?: number;
    noStatus?: number;
  };
  setfilterVal: (val: string) => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ count, setfilterVal }) => {
  return (
    <>
      <button 
        className="bg-primary btn mb-1" 
        data-testid="button-acceptable"
        onClick={() => setfilterVal('Acceptable')}
      >
        Acceptable ({count.acceptable})
      </button>
      <button 
        className="bg-success btn mb-1"
        data-testid="button-Monitor"
        onClick={() => setfilterVal('Monitor')}
      >
        Monitor ({count.monitor})
      </button>
      <button 
        className="btn bg-danger mb-1"
        data-testid="button-Danger"
        onClick={() => setfilterVal('Danger')}
      >
        Danger ({count.danger})
      </button>
      <button 
        className="btn bg-warning mb-1"
        data-testid="button-Alarm"
        onClick={() => setfilterVal('Alarm')}
      >
        Alarm ({count.alarm})
      </button>
      <button 
        className="btn bg-info mb-1"
        data-testid="button-noStatus"
        onClick={() => setfilterVal('')}
      >
        No Status ({count.noStatus})
      </button>
    </>
  );
};

export default ButtonComponent;

import React from 'react';
import { X, Check, AlertTriangle } from 'lucide-react';

const Alert = ({ type, message, onDismiss }) => {
  const bgColor = type === 'success' ? 'bg-green-100 border-green-400 text-green-700' :
                    type === 'error' ? 'bg-red-100 border-red-400 text-red-700' :
                    'bg-yellow-100 border-yellow-400 text-yellow-700';

  return (
    <div className={`${bgColor} px-4 py-3 rounded relative mb-4 flex items-center justify-between`} role="alert">
      <div className="flex items-center">
        {type === 'success' && <Check className="mr-2" size={16} />}
        {type === 'error' && <X className="mr-2" size={16} />}
        {type === 'warning' && <AlertTriangle className="mr-2" size={16} />}
        <span>{message}</span>
      </div>
      <button onClick={onDismiss} className="text-gray-500 hover:text-gray-700">
        <X size={16} />
      </button>
    </div>
  );
};

export default Alert;
import React from 'react';
import { FileText } from 'lucide-react';

const FileCard = ({ file, onViewFile }) => {
  const statusColor = file.status === 'valid' ? 'bg-green-500' :
                      file.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FileText className="text-blue-500" size={24} />
          <h3 className="font-medium">{file.name}</h3>
        </div>
        <div className={`w-3 h-3 rounded-full ${statusColor}`}></div>
      </div>
      <div className="text-sm text-gray-500 mb-1">
        Last modified: {file.lastModified}
      </div>
      <div className="text-sm text-gray-500 mb-4">
        {file.rows} rows
      </div>
      <button
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded flex items-center justify-center space-x-1"
        onClick={() => onViewFile(file.id)}
      >
        <span>View</span>
      </button>
    </div>
  );
};

export default FileCard;
import React from 'react';
import { Upload, Download } from 'lucide-react';
import FilesGrid from './FilesGrid';

const FilesView = ({ files, onViewFile }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">GTFS Files</h2>
          <div className="flex space-x-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2">
              <Upload size={18} />
              <span>Upload</span>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Download size={18} />
              <span>Export to Beckn</span>
            </button>
          </div>
        </div>

        <FilesGrid files={files} onViewFile={onViewFile} />
      </div>
    </div>
  );
};

export default FilesView;
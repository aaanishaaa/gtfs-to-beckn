import React, { useState, useRef } from 'react';
import { Upload, FileText, X } from 'lucide-react';

const FileUploader = ({ onFileUpload }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...Array.from(event.target.files)]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = [...selectedFiles];
    updatedFiles.splice(index, 1);
    setSelectedFiles(updatedFiles);
  };

  const uploadFiles = () => {
    if (selectedFiles.length > 0) {
      onFileUpload(selectedFiles);
      setSelectedFiles([]);
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Reset the file input
      }
    } else {
      // Optionally show a message if no files are selected
      alert('Please select files to upload.');
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Upload GTFS Files</h2>
      <p className="text-gray-600 mb-4">Drag and drop your GTFS zip files here or click to browse.</p>

      <div
        className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center hover:border-blue-500 cursor-pointer"
        onClick={handleBrowseClick}
      >
        <Upload className="text-blue-500 mb-2" size={48} />
        <p className="text-gray-500 text-sm">Click to browse files</p>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
          accept=".zip"
        />
      </div>

      {selectedFiles.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Selected Files</h3>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <FileText className="text-gray-500" size={16} />
                  <span>{file.name}</span>
                </div>
                <button onClick={() => handleRemoveFile(index)} className="text-red-500 hover:text-red-700">
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
              onClick={uploadFiles}
            >
              Upload Files
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
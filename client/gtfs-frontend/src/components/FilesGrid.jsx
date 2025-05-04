import React from 'react';
import FileCard from './FileCard';

const FilesGrid = ({ files, onViewFile }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {files.map((file) => (
      <FileCard key={file.id} file={file} onViewFile={onViewFile} />
    ))}
  </div>
);

export default FilesGrid;
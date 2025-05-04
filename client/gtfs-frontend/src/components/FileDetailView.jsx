import React, { useState } from 'react';
import { ChevronDown, FileText, Upload, Download } from 'lucide-react';
import DataTable from './DataTable';
import Alert from './Alert';

const FileDetailView = ({ fileId, tableData, onBack }) => {
  const [data, setData] = useState(tableData[fileId]);
  const [alert, setAlert] = useState(null);

  const handleUpdateCell = (rowId, column, value) => {
    const updatedData = {
      ...data,
      data: data.data.map(row =>
        row.id === rowId ? { ...row, [column]: value } : row
      )
    };
    setData(updatedData);
    setAlert({
      type: 'success',
      message: `Updated ${column} in row ${rowId} to "${value}"`
    });
  };

  const handleDeleteRow = (rowId) => {
    const updatedData = {
      ...data,
      data: data.data.filter(row => row.id !== rowId)
    };
    setData(updatedData);
    setAlert({
      type: 'success',
      message: `Deleted row with ID ${rowId}`
    });
  };

  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="mb-4 flex items-center space-x-1 text-blue-500 hover:text-blue-700"
      >
        <ChevronDown className="rotate-90" size={16} />
        <span>Back to files</span>
      </button>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <FileText className="text-blue-500" size={24} />
            <h2 className="text-xl font-semibold">{fileId}.txt</h2>
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-4 py-2 rounded-lg flex items-center space-x-2">
              <Upload size={18} />
              <span>Upload New Version</span>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
              <Download size={18} />
              <span>Export</span>
            </button>
          </div>
        </div>

        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onDismiss={() => setAlert(null)}
          />
        )}

        <DataTable
          columns={data.columns}
          data={data.data}
          onUpdateCell={handleUpdateCell}
          onDeleteRow={handleDeleteRow}
        />
      </div>
    </div>
  );
};

export default FileDetailView;
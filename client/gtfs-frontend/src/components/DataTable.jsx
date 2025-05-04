import React, { useState } from 'react';
import { Save, X, Edit, Trash2 } from 'lucide-react';
import EditableCell from './EditableCell';

const DataTable = ({ data, columns, onUpdateCell, onDeleteRow }) => {
  const [editingCell, setEditingCell] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleEdit = (rowId, column, value) => {
    setEditingCell({ rowId, column });
    setEditValue(value);
  };

  const handleSave = () => {
    if (editingCell) {
      onUpdateCell(editingCell.rowId, editingCell.column, editValue);
      setEditingCell(null);
    }
  };

  const handleCancel = () => {
    setEditingCell(null);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-100">
          <tr>
            {columns.map((column) => (
              <th key={column} className="py-3 px-4 text-left font-medium text-gray-600">{column}</th>
            ))}
            <th className="py-3 px-4 text-left font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50">
              {columns.map((column) => (
                <td key={`${row.id}-${column}`} className="py-3 px-4">
                  <EditableCell
                    value={editingCell && editingCell.rowId === row.id && editingCell.column === column ? editValue : row[column]}
                    isEditing={editingCell && editingCell.rowId === row.id && editingCell.column === column}
                    onChange={setEditValue}
                  />
                </td>
              ))}
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  {editingCell && editingCell.rowId === row.id ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="text-green-600 hover:text-green-800"
                      >
                        <Save size={18} />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-gray-600 hover:text-gray-800"
                      >
                        <X size={18} />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleEdit(row.id, columns[0], row[columns[0]])}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => onDeleteRow(row.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <Trash2 size={18} />
                      </button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
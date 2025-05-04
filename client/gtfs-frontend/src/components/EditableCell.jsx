import React, { useRef, useEffect } from 'react';

const EditableCell = ({ value, isEditing, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  if (isEditing) {
    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none"
        ref={inputRef}
      />
    );
  }
  return <span>{value}</span>;
};

export default EditableCell;
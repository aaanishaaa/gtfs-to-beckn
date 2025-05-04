import React from 'react';

const NavItem = ({ icon, label, active = false, onClick, isCollapsed }) => {
  const Icon = icon;
  return (
    <div
      className={`flex items-center space-x-3 p-3 ${active ? 'bg-slate-700' : 'hover:bg-slate-700'} rounded cursor-pointer ${isCollapsed ? 'justify-center' : ''}`}
      onClick={onClick}
    >
      <Icon size={18} />
      {!isCollapsed && <span>{label}</span>}
    </div>
  );
};

export default NavItem;
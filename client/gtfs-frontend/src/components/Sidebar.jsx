import React, { useState } from 'react';
import {
  Home,
  Upload,
  FileText,
  Database,
  Settings,
  Users,
  ChevronDown
} from 'lucide-react';
import Logo from './Logo';
import NavItem from './NavItem';

const Sidebar = ({ activePage, setActivePage }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navItems = [
    { icon: Home, label: 'Dashboard', id: 'dashboard' },
    { icon: FileText, label: 'GTFS Files', id: 'files' },
    { icon: Upload, label: 'Upload', id: 'upload' },
    { icon: Settings, label: 'Settings', id: 'settings' },
  ];

  return (
    <div className={`w-64 bg-slate-800 text-white flex flex-col h-screen fixed transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <Logo isCollapsed={isCollapsed} />
      <div className="flex-1 flex flex-col p-4">
        <div className="space-y-1">
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              active={activePage === item.id}
              onClick={() => setActivePage(item.id)}
              isCollapsed={isCollapsed}
            />
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-slate-700 flex items-center justify-between">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-gray-400 hover:text-white focus:outline-none"
        >
          {isCollapsed ? <ChevronDown className="rotate-90" size={18} /> : <ChevronDown size={18} />}
        </button>
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="font-semibold">BC</span>
            </div>
            <div>
              <div className="text-sm font-medium">Beckn Collective</div>
              <div className="text-xs text-slate-400">Admin</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
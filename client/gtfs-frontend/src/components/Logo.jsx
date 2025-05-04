import React from 'react';
import { Database } from 'lucide-react';

const Logo = ({ isCollapsed }) => (
  <div className="p-4 flex items-center border-b border-slate-700">
    <div className="bg-blue-500 p-2 rounded">
      <Database size={20} />
    </div>
    {!isCollapsed && <h1 className="text-xl font-semibold ml-2">GTFS to Beckn</h1>}
  </div>
);

export default Logo;
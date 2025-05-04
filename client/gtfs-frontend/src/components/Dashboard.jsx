import React from 'react';
import { RefreshCw, Edit, Trash } from 'lucide-react';

const Dashboard = ({ routes, files }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Total GTFS Files</h3>
          <p className="text-3xl font-semibold">{files.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Valid Files</h3>
          <p className="text-3xl font-semibold text-green-500">
            {files.filter(f => f.status === 'valid').length}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Files with Issues</h3>
          <p className="text-3xl font-semibold text-yellow-500">
            {files.filter(f => f.status !== 'valid').length}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Recent Routes</h3>
          <button className="text-blue-500 hover:text-blue-700 text-sm">View All Routes</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left">Route ID</th>
                <th className="py-3 px-4 text-left">Short Name</th>
                <th className="py-3 px-4 text-left">Long Name</th>
                <th className="py-3 px-4 text-left">Color</th>
                <th className="py-3 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {routes.slice(0, 5).map((route) => (
                <tr key={route.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{route.route_id}</td>
                  <td className="py-3 px-4">{route.route_short_name}</td>
                  <td className="py-3 px-4">{route.route_long_name}</td>
                  <td className="py-3 px-4">
                    <div style={{ backgroundColor: route.route_color, width: '20px', height: '20px', borderRadius: '50%' }}></div>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-indigo-500 hover:text-indigo-700 mr-2">
                      <Edit size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
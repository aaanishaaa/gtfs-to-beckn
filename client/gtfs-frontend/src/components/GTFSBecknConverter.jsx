import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Dashboard from './Dashboard';
import FilesView from './FilesView';
import FileUploader from './FileUploader';
import Settings from './Settings';
import FileDetailView from './FileDetailView';
import Alert from './Alert';

// Mock data (replace with your actual data fetching)
const mockGtfsFiles = [
  { id: 'file-1', name: 'routes.txt', lastModified: '2024-07-20', status: 'valid', rows: 150 },
  { id: 'file-2', name: 'stops.txt', lastModified: '2024-07-18', status: 'warning', rows: 320 },
  { id: 'file-3', name: 'trips.txt', lastModified: '2024-07-22', status: 'valid', rows: 580 },
  { id: 'file-4', name: 'agency.txt', lastModified: '2024-07-15', status: 'error', rows: 2 },
  { id: 'file-5', name: 'calendar.txt', lastModified: '2024-07-21', status: 'valid', rows: 100 },
  { id: 'file-6', name: 'stop_times.txt', lastModified: '2024-07-19', status: 'warning', rows: 1200 },
];

const mockTableData = {
  'routes.txt': {
    columns: ['route_id', 'agency_id', 'route_short_name', 'route_long_name', 'route_type', 'route_color'],
    data: [
      { id: 1, route_id: '1', agency_id: 'BC', route_short_name: 'route_1', route_long_name: 'Main Street Line', route_type: 3, route_color: '#007bff' },
      { id: 2, route_id: '2', agency_id: 'BC', route_short_name: 'route_2', route_long_name: 'Uptown Express', route_type: 3, route_color: '#dc3545' },
      { id: 3, route_id: '3', agency_id: 'BC', route_short_name: 'route_3', route_long_name: 'Downtown Local', route_type: 3, route_color: '#28a745' },
    ],
  },
  'stops.txt': {
    columns: ['stop_id', 'stop_name', 'stop_lat', 'stop_lon'],
    data: [
      { id: 1, stop_id: '101', stop_name: 'Central Station', stop_lat: 34.0522, stop_lon: -118.2437 },
      { id: 2, stop_id: '102', stop_name: 'University Ave', stop_lat: 34.0689, stop_lon: -118.4451 },
    ],
  },
  // ... more table data ...
};

// Main Component
export default function GTFSBecknConverter() {
  const [activePage, setActivePage] = useState('dashboard');
  const [currentFile, setCurrentFile] = useState(null);
  const [files, setFiles] = useState(mockGtfsFiles);
  const [alert, setAlert] = useState(null);
  const [routeDataForDashboard, setRouteDataForDashboard] = useState([]);

  useEffect(() => {
    // Extract route data for the dashboard on component mount and when files change
    const routesFile = files.find(file => file.name === 'routes.txt');
    if (routesFile && mockTableData['routes.txt']) {
      setRouteDataForDashboard(mockTableData['routes.txt'].data);
    } else {
      setRouteDataForDashboard([]);
    }
  }, [files]);

  const handleFileUpload = (uploadedFiles) => {
    setAlert({
      type: 'success',
      message: `Successfully uploaded ${uploadedFiles.length} files`
    });

    const newFiles = uploadedFiles.map((file, index) => ({
      id: `new-file-${Date.now()}-${index}`,
      name: file.name,
      lastModified: new Date().toISOString().split('T')[0],
      status: 'valid',
      rows: Math.floor(Math.random() * 100) + 10
    }));

    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const handleViewFile = (fileId) => {
    setCurrentFile(fileId);
  };

  const handleBackToFiles = () => {
    setCurrentFile(null);
  };

  return (
    <div className="flex h-screen bg-gray-100 text-slate-900">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 overflow-y-auto ml-64 p-6">
        <Header title={
          activePage === 'dashboard' ? 'Dashboard' :
          activePage === 'files' ? 'GTFS Files' :
          activePage === 'upload' ? 'Upload GTFS' :
          activePage === 'settings' ? 'Settings' :
          activePage === 'users' ? 'Users' : 'GTFS to Beckn'
        } />

        {alert && (
          <Alert
            type={alert.type}
            message={alert.message}
            onDismiss={() => setAlert(null)}
          />
        )}

        {activePage === 'dashboard' && <Dashboard routes={routeDataForDashboard} files={files} />}
        {activePage === 'files' && (
          <>
            {console.log("Files array in GTFSBecknConverter before FilesView:", files)}
            <FilesView
              files={files.filter(file => file && typeof file === 'object' && file.hasOwnProperty('status'))}
              onViewFile={handleViewFile}
            />
          </>
        )}
        {activePage === 'upload' && <FileUploader onFileUpload={handleFileUpload} />}
        {activePage === 'settings' && <Settings />}
        {currentFile && <FileDetailView fileId={currentFile} tableData={mockTableData} onBack={handleBackToFiles} />}
      </div>
    </div>
  );
}
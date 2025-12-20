import React from 'react';
import { useSystem } from '../../context/SystemContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Thermometer, Droplets, Activity } from 'lucide-react';

const AdminMonitor = () => {
    const { devices, getLatestReading } = useSystem();

    const getGasColor = (value, type) => {
        // Simple threshold logic for color
        if (value > 100) return '#ef4444'; // Red
        if (value > 50) return '#f59e0b'; // Amber
        return '#10b981'; // Green
    };

    return (
        <div className="space-y-6">
            <h2 className="font-bold text-slate-700">Live Device Monitor ({devices.length})</h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {devices.map((device) => {
                    const reading = getLatestReading(device.id);
                    const isOnline = device.status === 'online' || (reading && (new Date() - new Date(reading.timestamp?.toDate?.() || reading.timestamp)) < 60000);

                    return (
                    <div key={device.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                        <div className="flex justify-between items-center mb-6 border-b border-slate-50 pb-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">{device.id}</h3>
                                <p className="text-sm text-slate-500">{device.location} • Assigned: {device.assignedTo}</p>
                            </div>
                            <div className={`px-3 py-1 rounded-full text-xs font-bold ${isOnline ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                                {isOnline ? 'Online' : 'Offline'}
                            </div>
                        </div>

                        {isOnline && reading ? (
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {/* Gas Gauges */}
                                {['LPG', 'CO', 'H2', 'NH3'].map((gas) => {
                                    const value = reading[gas] || 0;
                                    const maxValue = 200; // Arbitrary max for gauge
                                    return (
                                        <div key={gas} className="flex flex-col items-center">
                                            <div style={{ width: 80, height: 80 }}>
                                                <CircularProgressbar
                                                    value={value}
                                                    maxValue={maxValue}
                                                    text={`${value.toFixed(0)}`}
                                                    styles={buildStyles({
                                                        textSize: '24px',
                                                        pathColor: getGasColor(value, gas),
                                                        textColor: '#334155',
                                                        trailColor: '#f1f5f9',
                                                    })}
                                                />
                                            </div>
                                            <span className="text-xs font-bold text-slate-500 mt-2">{gas} (PPM)</span>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="h-32 flex items-center justify-center text-slate-400 italic bg-slate-50 rounded-xl">
                                Device is Offline or No Data
                            </div>
                        )}

                        {/* Env Stats */}
                        {isOnline && reading && (
                            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-orange-50 text-orange-500 rounded-lg"><Thermometer size={20} /></div>
                                    <div>
                                        <div className="text-lg font-bold text-slate-700">{reading.temperature?.toFixed(1)}°C</div>
                                        <div className="text-xs text-slate-400">Temperature</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 text-blue-500 rounded-lg"><Droplets size={20} /></div>
                                    <div>
                                        <div className="text-lg font-bold text-slate-700">{reading.humidity?.toFixed(0)}%</div>
                                        <div className="text-xs text-slate-400">Humidity</div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )})}
            </div>
        </div>
    );
};

export default AdminMonitor;

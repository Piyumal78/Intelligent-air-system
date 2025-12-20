"use client"

import { useEffect, useState } from "react"
import { useSystem } from "../context/SystemContext"
import { useAuth } from "../context/AuthContext"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { Thermometer, Droplets, Wind, Activity, Waves } from "lucide-react"

const Dashboard = () => {
  const { devices, sensorReadings, getLatestReading } = useSystem()
  const { currentUser } = useAuth()
  const [currentReading, setCurrentReading] = useState(null)

  const myDevice = devices.find((d) => d.id === currentUser?.deviceId) || devices[0]

  useEffect(() => {
    if (myDevice) {
      const latest = getLatestReading(myDevice.id)
      if (latest) {
        setCurrentReading({
          co: latest.CO || 0,
          lpg: latest.LPG || 0,
          h2: latest.H2 || 0,
          nh3: latest.NH3 || 0,
          temp: latest.temperature || 0,
          hum: latest.humidity || 0,
          pressure: latest.pressure || 1013,
        })
        console.log("[v0] Updated readings:", latest)
      }
    }
  }, [myDevice, sensorReadings, getLatestReading])

  if (!myDevice) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-slate-700 mb-2">No Device Assigned</h2>
        <p className="text-slate-500">Please contact your administrator to assign a monitoring device.</p>
      </div>
    )
  }

  // Use current reading or fallback to empty values
  const readings = currentReading || {
    co: 0,
    lpg: 0,
    h2: 0,
    nh3: 0,
    temp: 0,
    hum: 0,
    pressure: 1013,
  }

  const getGasColor = (value, max) => {
    const pct = (value / max) * 100
    if (pct > 80) return "#ef4444"
    if (pct > 50) return "#f59e0b"
    return "#10b981"
  }

  const GaugeCard = ({ title, value, unit, max, icon: Icon, color }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-5">
        <Icon size={80} className={`text-${color}-500`} />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-slate-500 font-bold mb-4">{title}</h3>
        <div style={{ width: 120, height: 120 }}>
          <CircularProgressbar
            value={value}
            maxValue={max}
            text={`${value.toFixed(1)}`}
            styles={buildStyles({
              textSize: "20px",
              pathColor: getGasColor(value, max),
              textColor: "#1e293b",
              trailColor: "#f1f5f9",
            })}
          />
        </div>
        <span className="mt-2 text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{unit}</span>
      </div>
    </div>
  )

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">My Environment</h1>
          <p className="text-slate-500">
            Monitoring Device: <span className="font-mono font-bold text-blue-600">{myDevice.id}</span>
          </p>
        </div>
        <div
          className={`px-4 py-2 rounded-xl flex items-center gap-2 font-bold ${myDevice.status === "online" ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-red-50 text-red-600"}`}
        >
          <Activity size={18} />
          {myDevice.status}
        </div>
      </div>

      {/* Environmental Params */}
      <h2 className="text-lg font-bold text-slate-700 border-l-4 border-blue-500 pl-3">Ambient Conditions</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-500/20">
          <div className="flex items-center gap-3 opacity-80 mb-2">
            <Thermometer /> <span>Temperature</span>
          </div>
          <div className="text-4xl font-bold">{readings.temp?.toFixed(1)}°C</div>
          <div className="mt-4 text-blue-100 text-sm">Optimal: 22°C - 28°C</div>
        </div>
        <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-6 rounded-2xl text-white shadow-lg shadow-cyan-500/20">
          <div className="flex items-center gap-3 opacity-80 mb-2">
            <Droplets /> <span>Humidity</span>
          </div>
          <div className="text-4xl font-bold">{readings.hum?.toFixed(0)}%</div>
          <div className="mt-4 text-cyan-100 text-sm">Optimal: 40% - 60%</div>
        </div>
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-6 rounded-2xl text-white shadow-lg shadow-indigo-500/20">
          <div className="flex items-center gap-3 opacity-80 mb-2">
            <Wind /> <span>Pressure</span>
          </div>
          <div className="text-4xl font-bold">
            {readings.pressure?.toFixed(0)} <span className="text-lg font-normal">hPa</span>
          </div>
          <div className="mt-4 text-indigo-100 text-sm">Standard Atmospheric</div>
        </div>
      </div>

      {/* Gas Gauges */}
      <h2 className="text-lg font-bold text-slate-700 border-l-4 border-orange-500 pl-3">Gas Safety Levels</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <GaugeCard title="Carbon Monoxide (CO)" value={readings.co} unit="PPM" max={100} icon={Wind} color="slate" />
        <GaugeCard title="LPG Concentration" value={readings.lpg} unit="PPM" max={200} icon={Waves} color="orange" />
        <GaugeCard title="Hydrogen (H2)" value={readings.h2} unit="PPM" max={100} icon={Activity} color="purple" />
        <GaugeCard title="Ammonia (NH3)" value={readings.nh3} unit="PPM" max={50} icon={Droplets} color="lime" />
      </div>

      <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-3 text-blue-800 text-sm">
        <InfoIcon />
        <p>
          Readings are updated in real-time from Firebase Firestore. If any gauge turns Red, the system will trigger an
          immediate alert.
        </p>
      </div>
    </div>
  )
}

const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
)

export default Dashboard

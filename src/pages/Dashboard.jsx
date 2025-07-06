import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate, FaBrain, FaChartLine, FaRobot, FaUsers, FaStar, FaBook, FaClock, FaBell } from "react-icons/fa";
import { SiReact, SiJavascript, SiPython, SiHtml5, SiCss3, SiMongodb, SiNodedotjs } from "react-icons/si";
import { GiGraduateCap, GiBookshelf } from "react-icons/gi";
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
import Navbar from "../components/Navbar";

const PanelCard = ({ title, icon, description, delay = 0 }) => (
  <motion.div
    className="bg-white border border-gray-200 rounded-2xl p-6 shadow hover:shadow-md transition-all cursor-pointer"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="text-2xl text-indigo-500 mb-2 cursor-pointer">{icon}</div>
    <h4 className="font-semibold text-lg text-gray-800 mb-1">{title}</h4>
    <p className="text-sm text-gray-500">{description}</p>
  </motion.div>
);

const FeatureStripItem = ({ title, icon, delay = 0 }) => (
  <motion.div
    className="flex-1 min-w-0 bg-indigo-50 border border-indigo-100 rounded-xl p-4 flex items-center gap-3 hover:shadow-md hover:bg-white transition cursor-pointer"
    initial={{ opacity: 0, x: 30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
  >
    <div className="text-indigo-600 text-xl">{icon}</div>
    <span className="text-sm font-medium text-gray-700">{title}</span>
  </motion.div>
);

const FloatingIcon = ({ icon, style, className }) => (
  <div className={`absolute pointer-events-none opacity-90 z-20 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] ${className}`} style={style}>
    {icon}
  </div>
);

const FloatingShape = ({ style, className }) => (
  <div className={`absolute pointer-events-none ${className}`} style={style} />
);

const Dashboard = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-black relative overflow-hidden font-sans">
    {/* Floating Background Icons */}
    <FloatingIcon icon={<SiReact />} style={{ top: '20%', left: '4%', fontSize: '4.5rem', color: '#61dafb', opacity: 0.7, animation: 'float1 8s ease-in-out infinite' }} />
    <FloatingIcon icon={<SiJavascript />} style={{ top: '24%', right: '7%', fontSize: '3.6rem', color: '#f7df1e', opacity: 0.7, animation: 'float2 7s ease-in-out infinite' }} />
    <FloatingIcon icon={<SiPython />} style={{ bottom: '18%', left: '16%', fontSize: '3.9rem', color: '#3776ab', opacity: 0.7, animation: 'float3 9s ease-in-out infinite' }} />
    <FloatingIcon icon={<SiHtml5 />} style={{ top: '25%', left: '18%', fontSize: '3.3rem', color: '#e34c26', opacity: 0.7, animation: 'float4 10s ease-in-out infinite' }} />
    <FloatingIcon icon={<SiCss3 />} style={{ bottom: '33%', right: '15%', fontSize: '3.5rem', color: '#264de4', opacity: 0.7, animation: 'float5 8s ease-in-out infinite' }} />
    <FloatingIcon icon={<SiMongodb />} style={{ top: '60%', left: '5%', fontSize: '3.4rem', color: '#47a248', opacity: 0.7, animation: 'float6 11s ease-in-out infinite' }} />
    <FloatingIcon icon={<SiNodedotjs />} style={{ bottom: '17%', right: '3%', fontSize: '4.1rem', color: '#8cc84b', opacity: 0.7, animation: 'float7 9s ease-in-out infinite' }} />
    <FloatingIcon icon={<GiGraduateCap />} style={{ top: '12%', right: '18%', fontSize: '3.8rem', color: '#fff', opacity: 0.7, animation: 'float8 12s ease-in-out infinite' }} />
    {/* Navbar at the top */}
    <Navbar />
    <main className="p-4 relative z-10">
      <h2 className="text-5xl tracking-tight font-extrabold mb-10 flex items-center gap-2 font-sans" style={{letterSpacing:'-0.02em'}}>
        <span className="bg-gradient-to-r from-blue-600 via-violet-500 to-pink-400 bg-clip-text text-transparent animate-gradient drop-shadow-lg">Welcome back, Manush</span>
        <span className="animate-wave">👋</span>
      </h2>
      <div className="h-8"></div>
      {/* Progress Tracking Slider for Current Course */}
      <div className="mb-12 flex flex-col items-center">
        <label htmlFor="course-progress-slider" className="block text-lg font-semibold text-blue-400 mb-2">React Fundamentals Progress</label>
        <div className="w-full max-w-xl flex items-center gap-4">
          <span className="text-blue-300 font-medium">0%</span>
          <input
            id="course-progress-slider"
            type="range"
            min="0"
            max="100"
            value="38"
            readOnly
            className="w-full accent-pink-400 h-2 rounded-lg appearance-none bg-blue-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
          />
          <span className="text-pink-400 font-bold">38%</span>
        </div>
        <div className="mt-2 text-sm text-blue-500">
          You have completed 38% of <span className="font-semibold text-pink-400">React Fundamentals</span>.<br/>
          <span className="font-medium text-blue-500">Last left off at:</span> <span className="font-semibold text-violet-400">Hooks & State Management</span>
        </div>
      </div>
      {/* Command Center */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <PanelCard title="AI Mentor" icon={<FaRobot />} description="Today's Tip: Focus on recursion problems." delay={0.1} />
        <PanelCard title="Quiz/Challenges" icon={<FaBrain />} description="Test your skills with today's quiz or coding challenge!" delay={0.2} />
        <PanelCard title="Course Progress" icon={<FaChartLine />} description="38% completed. Current: Hooks & State Management" delay={0.3} />
        <PanelCard title="Upcoming Topic" icon={<FaBook />} description="Next: React Context & Reducers" delay={0.4} />
      </div>
      {/* Next Steps Checklist (replaces Weekly Progress Chart) */}
      <div className="relative mb-12 max-w-3xl mx-auto">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-400 via-pink-400 to-violet-400 blur-lg opacity-60 animate-border-glow z-0" />
        <div className="bg-white/60 backdrop-blur-xl border border-pink-200 rounded-2xl shadow-2xl p-6 relative z-10">
          <h3 className="text-xl font-semibold text-blue-800 mb-4 font-sans">Next Steps</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <input type="checkbox" checked disabled className="accent-pink-500 w-5 h-5" />
              <span className="text-gray-800 font-medium">Hooks & State Management</span>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" className="accent-pink-500 w-5 h-5" disabled />
              <span className="text-gray-800 font-medium">React Context & Reducers</span>
            </li>
            <li className="flex items-center gap-3">
              <input type="checkbox" className="accent-pink-500 w-5 h-5" disabled />
              <span className="text-gray-800 font-medium">Project: To-Do App</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Horizontal Feature Strip */}
      <h3 className="text-2xl font-semibold text-white mb-6 font-sans">Explore More</h3>
      <div className="w-full flex flex-nowrap gap-x-4">
        <FeatureStripItem icon={<FaBook />} title="Learning Library" delay={0.1} />
        <FeatureStripItem icon={<FaUserGraduate />} title="My Courses" delay={0.2} />
        <FeatureStripItem icon={<FaStar />} title="Achievements" delay={0.4} />
        <FeatureStripItem icon={<FaRobot />} title="AI Mentor" delay={0.5} />
        <FeatureStripItem icon={<FaBrain />} title="Skill Challenges" delay={0.6} />
      </div>
    </main>
    <style>{`
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradientMove 3s linear infinite alternate;
      }
      @keyframes gradientMove {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }
      .animate-wave {
        display: inline-block;
        animation: wave 1.2s infinite linear alternate;
      }
      @keyframes wave {
        0% { transform: rotate(-10deg); }
        100% { transform: rotate(10deg); }
      }
      .animate-fade-in {
        animation: fadeIn 0.2s ease-in;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes float1 { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
      @keyframes float2 { 0% { transform: translateY(0); } 50% { transform: translateY(25px); } 100% { transform: translateY(0); } }
      @keyframes float3 { 0% { transform: translateY(0); } 50% { transform: translateY(-20px); } 100% { transform: translateY(0); } }
      @keyframes float4 { 0% { transform: translateY(0); } 50% { transform: translateY(35px); } 100% { transform: translateY(0); } }
      @keyframes float5 { 0% { transform: translateY(0); } 50% { transform: translateY(-25px); } 100% { transform: translateY(0); } }
      @keyframes float6 { 0% { transform: translateY(0); } 50% { transform: translateY(30px); } 100% { transform: translateY(0); } }
      @keyframes float7 { 0% { transform: translateY(0); } 50% { transform: translateY(-35px); } 100% { transform: translateY(0); } }
      @keyframes float8 { 0% { transform: translateY(0); } 50% { transform: translateY(20px); } 100% { transform: translateY(0); } }
      @keyframes float9 { 0% { transform: translateY(0); } 50% { transform: translateY(-30px); } 100% { transform: translateY(0); } }
      @keyframes floatShape1 { 0% { transform: translateY(0); } 50% { transform: translateY(-40px); } 100% { transform: translateY(0); } }
      @keyframes floatShape2 { 0% { transform: translateY(0); } 50% { transform: translateY(30px); } 100% { transform: translateY(0); } }
      @keyframes floatShape3 { 0% { transform: translateY(0); } 50% { transform: translateY(-25px); } 100% { transform: translateY(0); } }
      .animate-border-glow {
        animation: borderGlow 3s linear infinite alternate;
      }
      @keyframes borderGlow {
        0% { opacity: 0.4; filter: blur(8px); }
        100% { opacity: 0.8; filter: blur(16px); }
      }
    `}</style>
  </div>
);

export default Dashboard;

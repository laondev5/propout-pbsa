
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  ComposedChart,
} from 'recharts';

const data = [
  { year: '2025.0', student: 250, fractional: 100, matching: 50, development: 30, tool: 20, total: 450 },
  { year: '2025.5', student: 300, fractional: 150, matching: 70, development: 40, tool: 30, total: 590 },
  { year: '2026.0', student: 400, fractional: 200, matching: 90, development: 60, tool: 50, total: 800 },
  { year: '2026.5', student: 500, fractional: 250, matching: 120, development: 80, tool: 70, total: 1020 },
  { year: '2027.0', student: 600, fractional: 300, matching: 150, development: 100, tool: 100, total: 1250 },
  { year: '2027.5', student: 700, fractional: 350, matching: 180, development: 130, tool: 140, total: 1500 },
  { year: '2028.0', student: 850, fractional: 400, matching: 220, development: 170, tool: 160, total: 1800 },
  { year: '2028.5', student: 1000, fractional: 500, matching: 250, development: 200, tool: 200, total: 2150 },
  { year: '2029.0', student: 1200, fractional: 550, matching: 300, development: 250, tool: 300, total: 2600 },
];

const ProjectionChart = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="h-[400px] bg-gray-800/50 animate-pulse rounded-lg"></div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full h-[400px] bg-white/5 p-4 rounded-lg"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="year" stroke="#aaa" />
          <YAxis 
            stroke="#aaa"
            label={{ 
              value: 'Projected Revenue (₦ Million)', 
              angle: -90, 
              position: 'insideLeft',
              style: { fill: '#aaa' }
            }}
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#333', borderColor: '#555' }}
            labelStyle={{ color: '#fff' }}
          />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="student" 
            stackId="1" 
            stroke="#FFB547" 
            fill="#FFB547" 
            name="Student Accommodation"
          />
          <Area 
            type="monotone" 
            dataKey="fractional" 
            stackId="1" 
            stroke="#FF8A65" 
            fill="#FF8A65" 
            name="Fractional Property Investment"
          />
          <Area 
            type="monotone" 
            dataKey="matching" 
            stackId="1" 
            stroke="#F06292" 
            fill="#F06292" 
            name="AI Property Matching & Mgmt"
          />
          <Area 
            type="monotone" 
            dataKey="development" 
            stackId="1" 
            stroke="#BA68C8" 
            fill="#BA68C8" 
            name="Property Development & Maintenance"
          />
          <Area 
            type="monotone" 
            dataKey="tool" 
            stackId="1" 
            stroke="#64B5F6" 
            fill="#64B5F6" 
            name="Asset Management Tool"
          />
          <Line 
            type="monotone" 
            dataKey="total" 
            stroke="#fff" 
            strokeWidth={2} 
            dot={true} 
            activeDot={{ r: 8 }}
            name="Total"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default ProjectionChart;

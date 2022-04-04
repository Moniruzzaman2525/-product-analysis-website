import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useRechart from '../../Hooks/useRechart';

const Dashbord = () => {
    const [chart, setChart] = useRechart();

    return (
        <div>
            <div className='md:flex justify-between'>
                <LineChart width={800} height={600} data={chart}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                </LineChart>

                <AreaChart
                    width={1000}
                    height={600}
                    data={chart}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="revenue" stackId="1" stroke="#82ca9d" fill="#00FF00" />
                </AreaChart>
            </div>
            <div className='md:flex justify-between mt-16'>
                <BarChart
                    width={800}
                    height={600}
                    data={chart}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                    <Bar dataKey="sell" stackId="a" fill="#82ca9d" />
                </BarChart>



                <PieChart width={730} height={500}>
                    <Pie data={chart} dataKey="investment" nameKey="month" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
                    <Pie data={chart} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={110} outerRadius={150} fill="#82ca9d" label />

                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashbord;
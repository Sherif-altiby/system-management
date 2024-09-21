import React from 'react';
import { 
  LineChart, 
  AreaChart, 
  Area, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  BarChart, 
  Bar, 
  ResponsiveContainer 
} from 'recharts';

const dataProducts = [
  { name: 'غسالة', sold: 100 },
  { name: 'مروحة', sold: 120 },
  { name: 'تلاجة', sold: 20 },
  { name: 'بتجاز', sold: 200 },
  { name: 'خلاط', sold: 1 },
  { name: 'مكنسة', sold: 40 },
  { name: 'دفاية', sold: 8 },
];

const dataSalled = [
  { name: 'يناير', sold: 40 },
  { name: 'فبراير', sold: 10 },
  { name: 'مارس', sold: 90 },
  { name: 'أبريل', sold: 2 },
  { name: 'مايو', sold: 11 },
  { name: 'يونيو', sold: 500 },
  { name: 'يوليو', sold: 100 },
  { name: 'أغسطس', sold: 110 },
  { name: 'سبتمبر', sold: 10 },
  { name: 'أكتوبر', sold: 80 },
  { name: 'نوفمبر', sold: 220 },
  { name: 'ديسمبر', sold: 50 },
];

const dataBar = [
  { name: 'غسالة', amount: 100 },
  { name: 'مروحة', amount: 120 },
  { name: 'تلاجة', amount: 20 },
  { name: 'بتجاز', amount: 200 },
  { name: 'f', amount: 200 },
  { name: 'hs', amount: 200 },
  { name: '6', amount: 200 },
  { name: 'خلاط', amount: 1 },
  { name: 'مكنسة', amount: 40 },
  { name: 'دفاية', amount: 8 },
  { name: 'd', amount: 8 },
  { name: 'de', amount: 8 },
  { name: 'd2', amount: 8 },
  { name: 'd4', amount: 8 },
  { name: '3d', amount: 8 },
  { name: '1d', amount: 8 },
  { name: '32d', amount: 8 },
  { name: '4d', amount: 8 },
  { name: '7d45', amount: 8 },
  { name: '9d56', amount: 8 },
  { name: '9d1', amount: 8 },
  { name: '9d2', amount: 8 },
  { name: '92d', amount: 8 },
  
];

const Dashboard = () => {
  return (
    <div className='dashboard' >
      <div className="main-container">
        <div className="row mb-4">
          <div className="col-12 col-md-6">
             <div className="static_card">
                    <ResponsiveContainer width="100%" >
                      <LineChart data={dataProducts}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sold" stroke="#3b80d9" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
             </div>
          </div>
          <div className="col-12 col-md-6">
               <div className="static_card">
               <ResponsiveContainer width="100%" >
              <AreaChart data={dataSalled}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sold" stroke="#8e65d3" fill="#8e65d3" />
              </AreaChart>
            </ResponsiveContainer>
               </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12">
              <div className="static_card">
              <ResponsiveContainer width="100%">
              <BarChart
                data={dataBar}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="amount" fill="#3b80d9" background={{ fill: '#eee' }} />
              </BarChart>
            </ResponsiveContainer>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

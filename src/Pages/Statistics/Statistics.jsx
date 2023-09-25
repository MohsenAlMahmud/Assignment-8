
import { PieChart, Pie, Tooltip } from 'recharts';

const Statistics = () => {
    const donateItems = JSON.parse(localStorage.getItem('donate'))
    console.log(donateItems.length)
    

    const data = [
        { name: 'Group A', value: donateItems.length, fill: '#00C49F' },
        { name: 'Group B', value: 12-donateItems.length, fill: '#FF444A' },
        
      ];

    return (
        <PieChart width={1200} height={600}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#FF4500"
            label
          />
          
          <Tooltip />
        </PieChart>
    );
};

export default Statistics;
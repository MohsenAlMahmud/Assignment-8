
import { PieChart, Pie, Tooltip } from 'recharts';

const Statistics = () => {
    const donateItems = JSON.parse(localStorage.getItem('donate'))
    console.log(donateItems.length)
    

    const data = [
        { name: 'Total Donation', value: Math.round((donateItems.length/12)*100), fill: '#FF444A' },
        { name: 'Your Donation', value: Math.round((12-donateItems.length)/12*100), fill: '#00C49F' },
        
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
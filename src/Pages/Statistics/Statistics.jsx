
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
  const donateItemsJSON = localStorage.getItem('donate');
  const donateItems = donateItemsJSON ? JSON.parse(donateItemsJSON) : [];
  
  const totalDonationValue = Math.round((12 - donateItems.length) / 12 * 100);
  const yourDonationValue = Math.max(0, Math.round((donateItems.length / 12) * 100));

  const data = [
    { name: 'Total Donation', value: totalDonationValue, fill: '#FF444A' },
    { name: 'Your Donation', value: yourDonationValue, fill: '#00C49F' },
  ];
  
  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#FF4500"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className='flex justify-center gap-6'>
        <div className='flex items-center gap-4'>
          <h2 className='font-medium'>Your Donation</h2>
          <div className='bg-[#00C49F] w-10 h-3'></div>
        </div>
        <div className='flex items-center gap-4'>
          <h2 className='font-medium'>Total Donation</h2>
          <div className='bg-[#FF444A] w-10 h-3'></div>
        </div>
      </div>
    </div>

  );

};

export default Statistics;

import { PieChart, Pie, Tooltip } from 'recharts';

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
      <PieChart width={1300} height={600}>
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={200}
          fill="#FF4500"
          label
        />
        <Tooltip />
      </PieChart>
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